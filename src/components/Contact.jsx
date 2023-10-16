// Imports from react
import { useState, useRef } from "react";
// Imports from react-bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// Toastify is imported to generate toasts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Emailjs is used to facilitate Email feature
import emailjs from "@emailjs/browser";
// Importing components from folder structure
import Footer from "./Footer";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_el3bih6",
        "template_yugw37x",
        form.current,
        "EhRjdbvxa7IhUWc2V"
      )
      .then((result) => {
        console.log(result.text);
        if (result.status === 200) {
          // Email sent successfully
          notify(); // Show success message
        } else {
          console.log("Email not sent successfully");
          pleaseFill(); // Show an error message or take other appropriate actions
        }
      })
      .catch((error) => {
        console.log("Email not sent successfully:", error);
        pleaseFill(); // Show an error message or take other appropriate actions
      });
  };

  const notify = () =>
    toast.success("Thanks for contacting us !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const pleaseFill = () =>
    toast.error("Please fill the data", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuserData({
      ...userData,
      [name]: value,
    });
  };
  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, message } = userData;
    if (name && email && message) {
      const res = fetch(
        "https://vibesversedata-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );
      if (res) {
        setuserData({
          name: "",
          email: "",
          message: "",
        });
        notify();
      } else {
        pleaseFill();
      }
    } else {
      pleaseFill();
    }
  };

  return (
    <>
      <h1 className="text-center text-[4vw] mb-6 mt-12 overflow-hidden">
        Contact <span className="span-feedback text-[4vw]"> Us</span>
      </h1>
      <Form method="post" ref={form} onSubmit={sendEmail} className="px-20">
        <section class="text-white  relative mb-16 overflow-hidden">
          <div class="container px-5 py-0 mx-auto">
            <div class="flex flex-col text-center w-full mb-2">
              <p class="lg:w-2/3 mx-auto text-base">
                You will get a response from one of our executive before 24 hours.
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={userData.name}
                      onChange={postUserData}
                      placeholder="Enter Your Name"
                      class="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={userData.email}
                      onChange={postUserData}
                      placeholder="Enter Your Email"
                      class="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="messag  e" class="leading-7 text-sm text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={userData.message}
                      onChange={postUserData}
                      placeholder="Enter your message"
                      class="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button
                    onClick={submitData}
                    type="submit"
                    class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                  >
                    Submit
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Form>
      <Footer></Footer>
    </>
  );
}

export default Contact;
