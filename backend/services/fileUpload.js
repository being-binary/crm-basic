import multer from 'multer'
import path from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import ExcelJS from 'exceljs'
const BASE_DIR = path.resolve('uploads'); // or wherever your base folder is


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
            const finalData = [];
            async function readWorkbook(filename) {
                const workbook = new ExcelJS.Workbook();
                await workbook.xlsx.readFile(filename);
                return workbook;
            }

            function getCellValue(cell) {
                if (cell && typeof cell === 'object') {
                    if ('result' in cell) {
                        return cell.result
                    } else {
                        return 0
                    }
                }
                return cell || '';
            }

            for (const file of req.files) {
                const workbook = await readWorkbook(file.path);

                for (const sheet of workbook.worksheets) {
                    console.log(`Processing sheet: ${sheet.name}`);

                    const dateRow = sheet.getRow(3);
                    const attendanceDates = dateRow.values.slice(7, 38).map(date => {
                        if (!date) return '';
                        return new Date(date).toISOString().split('T')[0];
                    });

                    sheet.eachRow((row, rowNumber) => {
                        if (rowNumber <= 3) return;

                        const values = row.values;

                        const division = getCellValue(values[44]) || getCellValue(values[40]);

                        const record = {
                            sheet: sheet.name,
                            emp_code: getCellValue(values[2]),
                            empName: getCellValue(values[3]),
                            department: getCellValue(values[4]),
                            unitName: getCellValue(values[5]),
                            costCode: getCellValue(values[6]),
                            days: Object.fromEntries(
                                attendanceDates.map((date, i) => [date, getCellValue(values[7 + i])])
                            ),
                            total: getCellValue(values[38]),
                            div: division
                        };

                        finalData.push(record);
                    });
                }

                // Clean up file after reading
                fs.unlink(file.path, (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                    }
                });
            }
            req.finaldata = finalData;
            return next();
        } catch (err) {
            console.error('Upload processing failed:', err);
            return res.status(400).json({ message: err.message, success: false });
        }
    }

    async uploadEmployeesFiles(req, res, next) {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ msg: 'No files uploaded', success: false });
        }

        try {
            console.log(req.files)
            const filesData = []
            for (const file of req.files) {
                const filedata = {
                    fileName: file.originalname,
                    path: path.join(BASE_DIR, file.filename),
                    mimeType: file.mimetype,
                    size: file.size
                }
                filesData.push(filedata)
            }
            req.filesData = filesData
            next()
        } catch (err) {
            console.log(err)
            res.status(400).json({ message: err.message, success: false });
        }
    }
}

export default new FileUpload()