"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogs from "./blogData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import { Modal, Box, TextField, Stack } from "@mui/material";

const Blog = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleOnChange = (type, value) => {
    // if (type === "title") {
    //   setModifiedData({ ...modifiedData, title: value });
    // } else if (type === "description") {
    //   setModifiedData({ ...modifiedData, description: value });
    // }
  };

  const handleSave = () => {
    // const updatedData = blogData.map((blog) => {
    //   if (blog.id === selectedBlog) {
    //     return {
    //       ...blog,
    //       title: modifiedData.title,
    //       paragraph: modifiedData.description,
    //     };
    //   }
    //   return blog;
    // });
    // setBlogData(updatedData);
    // setModifiedData({});
    // setOpen(false);
  };

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Stack spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  onChange={(e) => handleOnChange("title", e.target.value)}
                />

                <TextField
                  id="outlined-basic"
                  label="Paragraph"
                  variant="outlined"
                  onChange={(e) =>
                    handleOnChange("description", e.target.value)
                  }
                />

                <Button
                  variant="contained"
                  onClick={() => {
                    handleSave();
                  }}
                >
                  Save
                </Button>
              </Stack>
            </Box>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Blog;
