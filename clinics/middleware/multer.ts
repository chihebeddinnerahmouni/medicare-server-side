import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    const uniqueName = uuidv4() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

// Initialize upload for single file
const uploadSingle = multer({
  storage: storage,
  limits: { fileSize: 4000000 }, // Limit file size to 4MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("image"); // 'image' is the field name for the file

// Initialize upload for multiple files
const uploadArray = multer({
  storage: storage,
  limits: { fileSize: 4000000 }, // Limit file size to 1MB per file
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).array("images");

// Check file type
function checkFileType(file: any, cb: any) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);


  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

export { uploadSingle, uploadArray };
