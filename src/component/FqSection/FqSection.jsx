const FqSection = () => {
  return (
    <div className="relative mx-auto rounded-xl shadow bg-[#019D90]    bg-cover bg-no-repeat my-10">
    <div className="max-w-screen-xl mx-auto">
      <div className="w-full h-full absolute bg-BackGround_two animation "></div>
      <div className=" font-manrope text-center py-8">
        <p className="text-gray-300 text-lg">Common Question</p>
        <p className="text-5xl font-bold text-white py-5">
          Frequently asked questions
        </p>
      </div>

      {/* main que and ans  */}
      <div className="flex gap-8 justify-center py-20">
        {/* nuber 1one  */}
        <div className=" font-inter w-[500px] flex flex-col gap-5">
          <div className="collapse p-3 border border-[#feffff8b] border-l-4 rounded-xl collapse-arrow backdrop-blur  bg-black/20">
            <input type="radio" name="my-accordion-2" checked="checked" />

            <div className="collapse-title text-xl text-white">
              What is Disposable Temporary Email?
            </div>

            <div className="collapse-content">
              <p className="text-gray-100 font-light border-l-2 border-[#019D90] rounded font-inter px-3 leading-snug  ">
                Your temporary email address is above, they're great when
                registering with web sites you don't quite trust yet – and might
                never in the future. It's how you'll keep your real email
                address safe and private and still receive emails from them.
              </p>
            </div>
          </div>

          {/* 2number  */}
          <div className="collapse p-3 border border-[#feffff8b] border-l-4 rounded-xl collapse-arrow backdrop-blur bg-black/20">
            <input type="radio" name="my-accordion-2" checked="checked" />

            <div className="collapse-title text-xl text-white">
              When should I use a Disposable Temporary Email?
            </div>

            <div className="collapse-content">
              <p className="text-gray-100 font-light border-l-2 border-[#019D90] rounded font-inter px-3 leading-snug  ">
                It's best not to use Inboxes for important information or emails
                that you'll need to keep safe. Specifically services like
                banking, buying cryptocurrencies, or registering for services
                you use daily.
              </p>
            </div>
          </div>

          {/* 3 number  */}
          <div className="collapse p-3 border border-[#feffff8b] border-l-4 rounded-xl collapse-arrow backdrop-blur bg-black/20">
            <input type="radio" name="my-accordion-2" checked="checked" />

            <div className="collapse-title text-xl text-white">
              Are disposable temporary emails anonymous?
            </div>

            <div className="collapse-content">
              <p className="text-gray-100 font-light border-l-2 border-[#019D90] rounded font-inter px-3 leading-snug ">
                Inboxes.com make every effort to protect your anonymity, and as
                you'd expect no personal details are logged or collected by our
                service. Please read our terms and conditions carefully before
                starting.
              </p>
            </div>
          </div>
        </div>

        <div className="font-manrope w-[500px] flex flex-col gap-5">
          <div className="collapse p-3 border border-[#feffff8b] border-l-4  rounded-xl collapse-arrow backdrop-blur bg-black/20">
            <input type="radio" name="my-accordion-2" checked="checked" />

            <div className="collapse-title text-xl text-white">
              How long will my disposable temporary email last?
            </div>

            <div className="collapse-content">
              <p className="text-gray-100 font-light border-l-2 border-[#019D90] rounded font-inter px-3 leading-snug  ">
                Inboxes are not deleted and can be used for as long as we keep
                the domain is active. Please bear in mind that domains are
                recycled from time to time, and a notice period of one month
                will be given before we retire domains. Individual messages are
                deleted after 7 days.
              </p>
            </div>
          </div>
          {/* 2number  */}
          <div className="collapse p-3 border border-[#feffff8b] border-l-4 rounded-xl collapse-arrow backdrop-blur bg-black/20">
            <input type="radio" name="my-accordion-2" checked="checked" />

            <div className="collapse-title text-xl text-white">
              Who is behind this magical Disposable Temporary Email?
            </div>

            <div className="collapse-content">
              <p className="text-gray-100 font-light border-l-2 border-[#019D90] rounded font-inter px-3 leading-snug  ">
                That'd be us – hey! We are the original creators of AirMail,
                which has processed over 2 billion email messages. Rest assured,
                we know about emails and give anyone here complete privacy and
                anonymity whilst using our Disposable Temporary Email service.
              </p>
            </div>
          </div>
          {/* 3 number  */}
          <div className="collapse p-3 border border-[#feffff8b] border-l-4  rounded-xl collapse-arrow backdrop-blur  bg-black/20">
            <input type="radio" name="my-accordion-2" checked="checked" />

            <div className="collapse-title text-xl text-white">
              I'm a criminal, will Disposable Temporary Email help me?
            </div>

            <div className="collapse-content">
              <p className="text-gray-100 font-light border-l-2 border-[#019D90] rounded font-inter px-3 leading-snug ">
                Firstly, thank you for being honest. Secondly, no. Please do not
                use or abuse this service for illegal activities. This service
                is for personal use only, please use it with respect and a
                conscience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default FqSection;
