import React from "react";
import StudentSupport from "../Components/Elements/Student/StudentSupport";
import Layout1 from "../Components/Layout/Layout1";
import SupportStudentHeader from "../Components/Elements/Student/SupportStudentHeader";
export default function StudentSupportPage() {
  return (
    <>
      <Layout1>
        <div style={{marginTop: "15%"}}>
          <SupportStudentHeader />
          <StudentSupport />
        </div>
      </Layout1>
    </>
  );
}
