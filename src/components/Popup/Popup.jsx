import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import React, { useEffect, useState } from "react";

export default function Popup({
  data,
  isopen,
  handleClose,
  handleCraftreq,
  selectedcourse,
  referral,
  response,
  handleResponseClose,
  handleResponseOpen,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState(selectedcourse || "");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [locationall, setLocationall] = useState([]);
  const [courseall, setCourseall] = useState([]);
  useEffect(() => {
    if (data && data.location.length && data.Courses.length > 0) {
      setLocationall(data.location);
      setCourseall(data.Courses);
    }
  }, [data]);

  const handleSubmit = (e) => {
    const req = {
      form_name: name,
      form_mobile: mobile,
      form_email: email,
      form_course: course,
      form_type: type,
      form_message: message,
      form_location: location,
      form_referral: referral,
      form_referralcode: referralCode,
    };
    handleCraftreq(req);
  };

  return (
    <div>
      <Dialog open={isopen} onClose={handleClose} className="Popuppage">
        <div className="enroll">
          <DialogTitle className="enrollheading">Enroll Now</DialogTitle>
        </div>
        <div>
          <DialogContent className="feilds"></DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              className="iam-interested"
              type="submit"
              onClick={() => {
                handleSubmit();
                handleResponseOpen();
                handleClose();
              }}
            >
              I am Interested
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
