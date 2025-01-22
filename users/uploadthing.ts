import { createUploadthing, type FileRouter } from "uploadthing/express";

const f = createUploadthing();

export const uploadRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  }).onUploadComplete((data) => {
    console.log("upload completed", data);
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;



// import { createUploadthing } from "uploadthing/server";

// const uploadThing = createUploadthing();

// export const fileUploader = uploadThing({
//   // Define the allowed file types and size limits
//   image: { maxFileSize: "4MB", maxFileCount: 5 },
//   pdf: { maxFileSize: "10MB" },
// }).onUploadComplete(({ metadata }) => {
//   console.log("Upload complete:", metadata);
// });