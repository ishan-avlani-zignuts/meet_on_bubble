import React, { useState, useMemo } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import ImageOverlap from "../views/referral-marketing/ImageOverlap";
import CustomPagination from "../views/category_page/Pagination";

const ARTICLES_PER_PAGE = 6;

const CategoryPage = ({
  category,
  postCount,
  mainImage,
  mainTitle,
  mainSubtitle,
  articles,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(articles.length / ARTICLES_PER_PAGE),
    [articles]
  );

  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    return articles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
  }, [articles, currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Box>
        <Box paddingTop={"3rem"} paddingBottom={"16px"}>
          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "Neunhaas_e",
              position: "relative",
              display: "inline-block",
              "&:after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-2px",
                width: "100%",
                height: "1px",
                backgroundColor: "currentColor",
              },
            }}
          >
            BROWSING CATEGORY
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "72px" },
              fontFamily: "Neunhaas_e",
            }}
          >
            {category}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Neunhaas_c",
              paddingBottom: "24px",
              marginTop: { xs: "5px", sm: "-5px", md: "-10px" },
            }}
          >
            {postCount} posts
          </Typography>
        </Box>
      </Box>

      {(category === "Referral Marketing" || category === "Prelaunch") && (
        <ImageOverlap
          category={category}
          mainImage={mainImage}
          mainTitle={mainTitle}
          mainSubtitle={mainSubtitle}
        />
      )}

      <Box sx={{ marginTop: "30px" }}>
        <Grid container spacing={5}>
          {currentArticles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    mb: "1.5rem",
                    color: "#a8aab2",
                    fontSize: "14px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "black",
                      display: "flex",
                      color: "white",
                      width: "24px",
                      height: "24px",
                      borderRadius: "5px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "14px", fontFamily: "Neunhaas_c" }}
                    >
                      {category[0].toUpperCase()}
                    </Typography>
                  </Box>
                  <Box>-</Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Neunhaas_c",
                        fontWeight: 400,
                        fontSize: "14px",
                        textAlign: "center",
                        alignItems: "center",
                        position: "relative",
                        color: "#a8aab2",
                        "&:hover": {
                          color: "black",
                        },
                        "&:hover::after": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: "-2px",
                          height: "1px",
                          backgroundColor: "black",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: "-2px",
                          height: "1px",
                          backgroundColor: "transparent",
                          transition: "background-color 0.3s ease-in-out",
                        },
                      }}
                    >
                      {category.toUpperCase()}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: 0,
                    paddingTop: { xs: "75%", sm: "56.25%" },
                    position: "relative",
                    marginBottom: 2,
                    overflow: "hidden",
                    borderRadius: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={article.image}
                    alt={article.title || "Article image"}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    fontSize={"20px"}
                    fontFamily={"Neunhaas_c"}
                    fontWeight={800}
                  >
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#66676D"
                    fontSize={"14px"}
                    fontFamily={"Lora"}
                  >
                    {article.excerpt}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <CustomPagination
          totalPages={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />

        <Box
          sx={{
            bgcolor: "#F7F4F1",
            p: { xs: "30px", sm: "40px", md: "60px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "18px", sm: "22px", md: "22px" },
            }}
          >
            Join the 37,908 fellow marketers that get our newsletter
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: { xs: "100%", md: "auto" },
              gap: "10px",
              mt: { xs: 2, md: 0 },
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              size="small"
              sx={{
                bgcolor: "white",
                width: { xs: "100%", sm: "60%", md: "auto" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                },
                flexGrow: 1,
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.8)",
                },
                borderRadius: { xs: "0 4px 4px 0", sm: "5px" },
                height: { xs: "40px", md: "auto" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CategoryPage;
