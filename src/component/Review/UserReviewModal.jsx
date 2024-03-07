import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../shared/Auth/useAuth";
import useReview from "../../Hooks/useReview";
import useAxios from "../../Hooks/useAxios";
import Button from "../../shared/Button";
import ReactDatePicker from "react-datepicker";

const VITE_IMAGES_HOSTING_KEY = import.meta.env.VITE_IMAGES_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGES_HOSTING_KEY}`;

const UserReviewModal = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const { refetch } = useReview();
  const axiosPublick = useAxios();
  const [uplodeImage, setUpladeImage] = useState(false);
  const [closeReviewModal, setCloseReviewModal] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const SubmitReeiew = async (data) => {
    setCloseReviewModal(true);
    setUpladeImage(true);
    const fromImages = { image: data.image[0] };
    const res = await axiosPublick.post(images_hosting_api, fromImages, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      setUpladeImage(false);
      const photoURL = res?.data?.data?.display_url;
      const addArticle = {
        image: photoURL,
        name: data.name,
        review: data.review,
        rating: data.rating,
        date: startDate,
        email: user?.email,
      };
      axiosPublick.post(`/review`, addArticle).then((res) => {
        if (res?.data) {
          reset();
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfull Reveiw Added",
            showConfirmButton: false,
            background: "#144248",
            color: "#EEEEEE",
            timer: 2000,
          });
        }
      });
    }
  };
  useEffect(() => {
    setCloseReviewModal(false);
  }, [closeReviewModal]);
  return (
    <>
      {closeReviewModal ? (
        ""
      ) : (
        <>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box max-w-4xl bg-[#EEEEEE] p-0 dark:bg-[#232f44]">
              <h1 className="text-2xl md:text-4xl font-bold text-[#144248] my-5 md:mt-10 px-5 text-center dark:text-slate-400">
                Add some{" "}
                <span className=" text-[#019D90]  ">Heartfelt Words</span>
              </h1>
              <p className="text-sm md:text-lg font-medium text-[#144248] text-center px-5 dark:text-slate-400">
                Dive into a world of joy and satisfaction! Our review section is
                a playground of happiness where every comment is like a sprinkle
                of confetti.
              </p>
              <form onSubmit={handleSubmit(SubmitReeiew)}>
                <div className="md:flex gap-5 items-center w-full">
                  <div className="mb-4 md:mb-0 md:w-[50%]">
                    <label className=" md:mb-2 tracking-[1px] dark-mode-labal">
                      Your Name
                    </label>
                    <div>
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        defaultValue={user?.displayName}
                        placeholder="Your Name"
                        className="input-text dark:bg-[#28374e]"
                      />
                    </div>
                  </div>
                  <div className="mb-4 md:mb-0 md:w-[50%]">
                    <label className=" md:mb-2 tracking-[1px] dark-mode-labal">
                      Input File
                    </label>
                    <div>
                      <input
                        {...register("image")}
                        type="file"
                        className="input-file dark:bg-[#28374e]"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:flex gap-5 items-center w-full">
                  <div className="mb-4 md:mb-0 md:w-[50%]">
                    <label className=" md:mb-2 tracking-[1px] dark-mode-labal">
                      Your Email
                    </label>
                    <div>
                      <input
                        {...register("email")}
                        defaultValue={user?.email}
                        className="input-text dark:bg-[#28374e]"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="mb-4 md:mb-0 md:w-[50%]">
                    <label className=" md:mb-2 tracking-[1px] dark-mode-labal">
                      Date
                    </label>
                    <div className="w-full">
                      <ReactDatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="input-text dark:bg-[#28374e] w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4 md:mb-0 w-full">
                  <label className=" md:mb-2 tracking-[1px] dark-mode-labal">
                    Rating
                  </label>
                  <div>
                    <input
                      {...register("rating", { required: true })}
                      type="text"
                      placeholder="Rating"
                      className="input-text dark:bg-[#28374e]"
                    />
                  </div>
                </div>

                <div className="mb-4 md:mb-0 w-full">
                  <label className=" md:mb-2 tracking-[1px] dark-mode-labal">
                    Reveiw
                  </label>
                  <div className="mt-1">
                    <textarea
                      {...register("review", { required: true })}
                      cols={20}
                      rows={2}
                      type="text"
                      required=""
                      placeholder="Your Review"
                      className="input-text dark:bg-[#28374e]"
                    />
                  </div>
                  <div className="flex justify-end items-center my-5 gap-5">
                    <Button
                      type="submit"
                      name={uplodeImage ? "Wating.." : "Submit "}
                    ></Button>
                    <div className="modal-action m-0">
                      <label
                        htmlFor="my_modal_6"
                        className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded   flex justify-center items-center gap-2 dark:bg-[#1E293B] dark:text-slate-100"
                      >
                        Close
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserReviewModal;
