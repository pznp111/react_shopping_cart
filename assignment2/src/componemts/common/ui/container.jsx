import React from "react";
import Typography from "@mui/material/Typography";
import Section from "./section";





const Container = ({ children, title }) => {

    return ( <Section> <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ fontWeight: "bold", marginBottom: "30px" }}
      >
        {title}
      </Typography>
      {children}</Section>);
   
   
}

export default Container;