"use server";
import Contact from "../../model/contact";
import dbConnect from "@/utils/dbConn";

const submitContact = async (data) => {
  try {
    await dbConnect();
    await Contact.create(data);
    return { statua: "ok", message: "Message has been sent successfully" };
  } catch (error) {
    return { statua: "error", message: "Message has been sent successfully" };
  }
};

export default submitContact;
