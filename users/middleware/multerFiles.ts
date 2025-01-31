import multer from "multer";
import path from "path";

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/files"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize upload for single file
const uploadSingleFile = multer({
  storage: storage,
  limits: { fileSize: 3000000 }, 
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("file");

// Initialize upload for multiple files
const uploadArrayFile = multer({
  storage: storage,
  limits: { fileSize: 3000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).array("files"); 

// Check file type
function checkFileType(file: any, cb: any) {
  const filetypes = /jpeg|jpg|png|gif|pdf/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
        cb("Error: Images and PDFs Only!");
  }
}

export { uploadSingleFile, uploadArrayFile };
