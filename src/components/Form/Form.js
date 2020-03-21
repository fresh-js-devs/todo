import React from "react";
import "./Form.css";

// FEEDBACK
// vo vseobecnosti je dobre pouzit jedne druh stylovania. Vidim, ze vo vela pripadoch mas inline styly
// no tu je stylesheet
// chapem, ze si si to chcel, vyskusat, no dobuducna je lepsie byt konzistentny.. kazdopadne snahu cenim!
const Form = ({ children }) => <div className="form">{children}</div>;

export default Form;
