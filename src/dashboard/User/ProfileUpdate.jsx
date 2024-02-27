/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Button from "../../shared/Button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./ProfileUpdate.css";
import useUserSingle from "../../Hooks/useUserSingle";
const VITE_IMAGES_HOSTING_KEY = import.meta.env.VITE_IMAGES_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGES_HOSTING_KEY}`;

const ProfileUpdate = () => {
    const axiosPublick = useAxios();
  const [open, setOpon] = useState(true);
  const [imgLoader, setImgLoader] = useState(false);
  const [value, setValue] = useState();

  // eslint-disable-next-line no-unused-vars
  const { userSingle, refetch } = useUserSingle();
  console.log(userSingle)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    setImgLoader(true);
    const fromImages = { image: data.image[0] };
    const res = await axiosPublick.post(images_hosting_api, fromImages, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      setImgLoader(false);
      setOpon(false);
      const photoURL = res?.data?.data?.display_url;
      const updatedProfile = {
        img: photoURL,
        name: data.name,
        bio: data.bio,
        education: data.education,
        city: data.city,
        mobile: value,
      };
      axiosPublick.put(`/user/profile/updated?email=${userSingle?.email}`, updatedProfile).then((res) => {
        if (res?.data) {
          reset();
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfull User Profile updated",
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
    setOpon(true);
  }, [open]);
  return (
    <>
      {open ? (
        <>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box max-w-4xl bg-[#EEEEEE] p-0 ">
              <h1 className="text-4xl mt-5 font-bold text-[#144248] text-center">
                Update <span className=" text-[#019D90]  ">Profile</span>
              </h1>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" text-left flex justify-start items-start p-6 w-full space-y-3"
              >
                <div className="md:flex gap-5 items-center w-full">
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] text-[18px] tracking-[2px] uppercase ">
                      Name
                    </label>
                    <div>
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        defaultValue={userSingle?.name}
                        placeholder="Name"
                        className="input-text"
                        id="name"
                      />
                    </div>
                  </div>
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] text-[18px] tracking-[2px] uppercase ">
                      Input File
                    </label>
                    <div>
                      <input
                        {...register("image")}
                        type="file"
                        className="input-file"
                        id="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:flex gap-5 items-center w-full">
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] text-[18px] tracking-[2px] uppercase ">
                      Email
                    </label>
                    <div>
                      <input
                        defaultValue={userSingle?.email}
                        className="input-text"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] text-[18px] tracking-[2px] uppercase ">
                      Education
                    </label>
                    <div>
                      <input
                        {...register("education", { required: true })}
                        type="text"
                        placeholder="Education"
                        defaultValue={userSingle?.education}
                        className="input-text"
                        id="education"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:flex gap-5 items-center w-full">
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] text-[18px] tracking-[2px] uppercase ">
                      City
                    </label>
                    <div>
                      <input
                        {...register("city", { required: true })}
                        type="text"
                        placeholder="City"
                        defaultValue={userSingle?.city}
                        className="input-text"
                        id="city"
                      />
                    </div>
                  </div>
                  <div className="md:w-[50%]">
                    <label className=" mb-2 font-medium text-[#144248] text-[18px] tracking-[2px] uppercase ">
                      Number
                    </label>
                    <div>
                      <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="RU"
                        value={value}
                        onChange={setValue}
                        defaultValue={userSingle?.mobile}
                        className="input-text"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label className="mb-2 font-medium text-[#144248] text-[18px] tracking-[2px] uppercase">
                    Bio
                  </label>
                  <div className="mt-1">
                    <textarea
                      {...register("bio", { required: true })}
                      cols={20}
                      rows={3}
                      type="text"
                      required=""
                      placeholder="Your Bio"
                      className="input-text"
                      id="bio"
                      defaultValue={userSingle?.bio}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-end items-center mt-5 gap-5">
                  <input
                    type="submit"
                    value={imgLoader ? "Waiting..." : "Sign up"}
                    className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded   flex justify-center items-center gap-2 "
                  />
                  <div className="modal-action m-0">
                    <label
                      htmlFor="my_modal_6"
                      className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded   flex justify-center items-center gap-2 "
                    >
                      Close
                    </label>
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

export default ProfileUpdate;
