import multer from 'multer'
import path from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import ExcelJS from 'exceljs'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class FileUpload {

    constructor() {
        this.upload = multer({ dest: 'uploads/' })
        this.uploadtophotos = multer({
            storage: multer.diskStorage({
                destination: function (req, file, cb) {
                    // Set the specific directory for photos
                    const uploadPath = path.join(__dirname, '../uploads/');
                    cb(null, uploadPath);
                },
                filename: function (req, file, cb) {
                    // Add timestamp and extension to the filename
                    const uniqueName = `${Date.now()}-${file.originalname}`;
                    cb(null, uniqueName);
                }

            })
        })
    }

    async uploadFiles(req, res, next) {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ msg: 'No files uploaded', success: false });
        }

        try {
            function readWorkbook(filename) {
                const workbook = new ExcelJS.Workbook();
                return workbook.xlsx.readFile(filename).then(() => workbook);
            }

            function getCellValue(cell) {
                if (cell && typeof cell === 'object' && 'result' in cell) {

                    return cell.result;
                }
                return cell || '';
            }

            const finalData = []
            for (const file of req.files) {
                const data = []

                readWorkbook(file.path) // ✅ fixed file extension
                    .then(workbook => {
                        const worksheet = workbook.getWorksheet(1); // First sheet
                        console.log(workbook.worksheets[0].name)
                        const dateRow = workbook.worksheets[0].getRow(3);
                        const attendanceDates = dateRow.values.slice(7, 38).map(date => {
                            return new Date(date).toISOString().split('T')[0];
                        });
                        console.log(attendanceDates)
                        workbook.worksheets[0].eachRow((row, rowNumber) => {
                            if (rowNumber === 1) return;
                            const values = row.values;
                            const record = {
                                empId: getCellValue(values[2]),
                                empName: getCellValue(values[3]),
                                department: getCellValue(values[4]),
                                unitName: getCellValue(values[5]),
                                costCode: getCellValue(values[6]),
                                attendance: Object.fromEntries(
                                    attendanceDates.map((date, i) => [date, getCellValue(values[7 + i])])
                                ),
                                // attendance: values.slice(7, 38).map(getCellValue), // G4 to AK4: 35 items
                                totalDays: getCellValue(values[38]),
                                totalWorkingDays: getCellValue(values[40]),             // AL4
                                lateCome: getCellValue(values[41]),               // AM4
                                paidDays: getCellValue(values[42]),               // AN4
                                carryForward: getCellValue(values[43]),           // AO4
                                div: getCellValue(values[44])                     // AP4
                            };
                            data.push(record)
                        });

                        finalData.push(...data)
                        req.finaldata = finalData
                        fs.unlink(file.path, (err) => {
                            if (err) {
                                console.error('Error deleting file:', err);
                            }
                        });
                        next()
                    })
                    .catch(err => {
                        console.error('Failed to read Excel file:', err);
                        res.status(400).json({ message: err.message, success: false });
                    });

            }
            // res.status(200).json({
            //     msg: 'File processed successfully',
            //     success: true,
            //     data: allDocs,
            // });
            // res.status(200).json({ msg: 'success upload', })
            // Process the file (e.g., upload to cloud storage)
            // After processing, delete the file
            // for (const file of req.files) {
            //     await fs.unlink(file.path, (err) => {
            //         if (err) {
            //             console.error('Error deleting file:', err);
            //         }
            //     });
            // }
            // next()
        } catch (err) {
            console.log(err)
            res.status(400).json({ message: err.message, success: false });
        }
    }

}

export default new FileUpload()