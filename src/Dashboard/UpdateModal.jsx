import { useForm } from "react-hook-form";
import Button from "../pages/Shared/Button";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
const VITE_IMAGES_HOSTING_KEY = import.meta.env.VITE_IMAGES_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGES_HOSTING_KEY}`;

const UpdateModal = ({ updatedArticle, refetch }) => {
  const axiosPublick = useAxios();
  const [open, setOpon] = useState(true);
  const {
    _id,
    img,
    title,
    description,
    shortDescription,
    date,
    whyToUse,
    whereToUse,
    useToHelp,
    benefits,
    suggestArticle,
  } = updatedArticle;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const fromImages = { image: data.image[0] };
    const res = await axiosPublick.post(images_hosting_api, fromImages, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      setOpon(false);
      const photoURL = res?.data?.data?.display_url;
      const addArticle = {
        img: photoURL,
        title: data.title,
        description: data.description,
        shortDescription: data.shortDescription,
        date: data.date,
        whyToUse: data.whyToUse,
        whereToUse: data.whereToUse,
        useToHelp: data.useToHelp,
        benefits,
        suggestArticle,
      };
      axiosPublick.put(`/article/${_id}`,addArticle)
      .then((res) => {
        if (res?.data?.modifiedCount>0) {
          reset()
          refetch()
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfull Article updated",
            showConfirmButton: false,
            background: '#144248',
            color: '#EEEEEE',
            timer: 2000
          }); 
        }
      })
    }
  };
  useEffect(() => {
    setOpon(true);
  }, [open]);
  const styleInput = "mt-1 shadow-sm w-full text-[#144248] px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-none rounded-lg bg-gray-50 focus:outline-none focus:ring-gray-50 focus:ring-offset-gray-300";
  return (
    <>
      {open ? (
        <>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box max-w-5xl bg-[#EEEEEE] p-0 ">
            <h1 className="text-4xl mt-5 font-bold text-[#144248] text-center">
          Update <span className=" text-[#019D90]  ">Article</span>
        </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" text-left flex justify-start items-start
p-6 w-full space-y-3"
              >
                <div className="md:flex gap-5 items-center w-full">
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] "> Title </label>
                    <div>
                      <input
                        {...register("title", { required: true })}
                        type="text"
                        defaultValue={title}
                        placeholder="Title"
                        className={styleInput}
                      />
                    </div>
                  </div>
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] "> Input File </label>
                    <div>
                      <input
                        {...register("image")}
                        type="file"
                        className="file-input mt-1 file-input-bordered file-input-success w-full  focus:outline-none border-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:flex gap-5 items-center w-full">
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] "> Why To Use</label>
                    <div>
                      <input
                        {...register("whyToUse", { required: true })}
                        type="text"
                        defaultValue={whyToUse}
                        placeholder="Why To Use"
                        className={styleInput}
                      />
                    </div>
                  </div>
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] "> Use To Help </label>
                    <div>
                      <input
                        {...register("useToHelp", { required: true })}
                        type="text"
                        defaultValue={useToHelp}
                        placeholder="Use To Help"
                        className={styleInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:flex gap-5 items-center w-full">
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] ">
                      {" "}
                      Where To Use{" "}
                    </label>
                    <div>
                      <input
                        {...register("whereToUse", { required: true })}
                        type="text"
                        defaultValue={whereToUse}
                        placeholder="Where To Use"
                        className={styleInput}
                      />
                    </div>
                  </div>
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] "> Date </label>
                    <div>
                      <input
                        {...register("date", { required: true })}
                        type="date"
                        defaultValue={date}
                        className={styleInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:flex gap-5 items-center w-full">
                  <div className="md:w-[50%]">
                    <label className="font-medium"> short Description </label>
                    <div className="mt-1">
                      <input
                        {...register("shortDescription", { required: true })}
                        type="text"
                        defaultValue={shortDescription}
                        placeholder="Short Description"
                        className={styleInput}
                      />
                    </div>
                  </div>
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] "> Benefits </label>
                    <div className="mt-1">
                      <select disabled className={styleInput}>
                        <option>Select Benefits</option>
                        <option value="Enhanced online security">
                          Enhanced online security
                        </option>
                        <option value="Enhanced online security">
                          Privacy protection
                        </option>
                        <option value="Enhanced online security">
                          Reduced risk of identity theft
                        </option>
                        <option value="Inbox organization">
                          Inbox organization
                        </option>
                        <option value="Improved productivity">
                          Improved productivity
                        </option>
                        <option value="Reduced risk of identity theft">
                          Reduced risk of identity theft
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <label className="font-medium"> Description </label>
                  <div className="mt-1">
                    <textarea
                      {...register("description", { required: true })}
                      cols={20}
                      rows={5}
                      type="text"
                      defaultValue={description}
                      required=""
                      placeholder="Your description"
                      className={styleInput}
                    />
                  </div>
                  <div className="flex justify-end items-center mt-5 gap-5">
                    <Button type="submit" name={"Submit "}></Button>
                    <div className="modal-action m-0">
                      <label
                        htmlFor="my_modal_6"
                        className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded   flex justify-center items-center gap-2 "
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
      ) : (
        ""
      )}
    </>
  );
};
export default UpdateModal;
