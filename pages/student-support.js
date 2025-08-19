import React from "react";
import StudentSupport from "../Components/Elements/Student/StudentSupport";
import Layout2 from "../Components/Layout/Layout2";
import SupportStudentHeader from "../Components/Elements/Student/SupportStudentHeader";
export default function StudentSupportPage() {
  return (
    <Layout2>
      <SupportStudentHeader />
      <StudentSupport />
    </Layout2>
  );
}
