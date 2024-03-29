const FqSection = () => {
  return (
    <div className="relative mx-auto rounded-xl shadow max-w-screen-xl bg-[#019D90] bg-cover bg-no-repeat my-10 dark:bg-[#1E293B]">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full h-full absolute bg-BackGround_two bg-cover bg-no-repeat animation "></div>
        <div className=" font-manrope text-center py-8">
          <p className="text-[#eee] text-lg dark:text-slate-400">Common Question</p>
          <p className="text-5xl font-bold text-[#eee] pb-5">
            Frequently asked questions
          </p>
        </div>

        {/* main que and ans  */}
        <div className="flex gap-8 flex-col p-2 md:flex-row justify-center pb-16">
          {/* nuber 1one  */}
          <div className=" font-inter w-full md:w-[500px] flex flex-col gap-5">
            <div className="collapse p-3 border border-[#feffff8b] dark:border-slate-400 border-l-4 rounded-xl collapse-arrow backdrop-blur  bg-black/20 dark:bg-[#1E293B]">
              <input type="radio" name="my-accordion-2" defaultChecked={true} />
              <div className="collapse-title text-xl text-[#eee] dark:text-white">
                What is Disposable Temporary Email?
              </div>
              <div className="collapse-content">
                <p className="text-gray-100 font-light border-l-2 border-[#019D90] rounded font-inter px-3 leading-snug  dark:text-slate-400">
                  Your temporary email address is above, they're great when
                  registering with web sites you don't quite trust yet – and
                  might never in the future. It's how you'll keep your real
                  email address safe and private and still receive emails from
                  them.
                </p>
              </div>
            </div>

            {/* 2number  */}
            <div className="collapse p-3 border border-[#feffff8b] dark:border-slate-400 border-l-4 rounded-xl collapse-arrow backdrop-blur  bg-black/20 dark:bg-[#1E293B]">
              <input type="radio" name="my-accordion-2" />

              <div className="collapse-title text-xl text-[#eee] dark:text-white">
                When should I use a Disposable Temporary Email?
              </div>

              <div className="collapse-content">
                <p className="text-gray-100 font-light border-l-2 border-[#019D90] rounded font-inter px-3 leading-snug  dark:text-slate-400">
                  It's best not to use Inboxes for important information or
                  emails that you'll need to keep safe. Specifically services
                  like banking, buying cryptocurrencies, or registering for
                  services you use daily.
                </p>
              </div>
            </div>

            {/* 3 number  */}
            <div className="collapse p-3 border border-[#feffff8b] dark:border-slate-400 border-l-4 rounded-xl collapse-arrow backdrop-blur  bg-black/20 dark:bg-[#1E293B]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl text-[#eee] dark:text-white">
                Are disposable temporary emails anonymous?
              </div>

              <div className="collapse-content">
                <p className="text-gray-100 font-light border-l-2 border-[#019D90] rounded font-inter px-3 leading-snug dark:text-slate-400">
                  Inboxes.com make every effort to protect your anonymity, and
                  as you'd expect no personal details are logged or collected by
                  our service. Please read our terms and conditions carefully
                  before starting.
                </p>
              </div>
            </div>
          </div>

          <div className="font-manrope w-full md:w-[500px] flex flex-col gap-5">
            <div className="collapse p-3 border border-[#feffff8b] dark:border-slate-400 border-l-4 rounded-xl collapse-arrow backdrop-blur  bg-black/20 dark:bg-[#1E293B]">
              <input type="radio" name="my-accordion-2" />

              <div className="collapse-title text-xl text-[#eee] dark:text-white">
                How long will my disposable temporary email last?
              </div>

              <div className="collapse-content">
                <p className="text-gray-100 font-light border-l-2 border-[#019D90] rounded font-inter px-3 leading-snug  dark:text-slate-400">
                  Inboxes are not deleted and can be used for as long as we keep
                  the domain is active. Please bear in mind that domains are
                  recycled from time to time, and a notice period of one month
                  will be given before we retire domains. Individual messages
                  are deleted after 7 days.
                </p>
              </div>
            </div>
            {/* 2number  */}
            <div className="collapse p-3 border border-[#feffff8b] dark:border-slate-400 border-l-4 rounded-xl collapse-arrow backdrop-blur  bg-black/20 dark:bg-[#1E293B]">
              <input type="radio" name="my-accordion-2" />

              <div className="collapse-title text-xl text-[#eee] dark:text-white">
                Who is behind this magical Disposable Temporary Email?
              </div>

              <div className="collapse-content">
                <p className="text-gray-100 font-light border-l-2 border-[#019D90] rounded font-inter px-3 leading-snug  dark:text-slate-400">
                  That'd be us – hey! We are the original creators of AirMail,
                  which has processed over 2 billion email messages. Rest
                  assured, we know about emails and give anyone here complete
                  privacy and anonymity whilst using our Disposable Temporary
                  Email service.
                </p>
              </div>
            </div>
            {/* 3 number  */}
            <div className="collapse p-3 border border-[#feffff8b] dark:border-slate-400 border-l-4 rounded-xl collapse-arrow backdrop-blur  bg-black/20 dark:bg-[#1E293B]">
              <input type="radio" name="my-accordion-2" />

              <div className="collapse-title text-xl text-[#eee] dark:text-white">
                I'm a criminal, will Disposable Temporary Email help me?
              </div>

              <div className="collapse-content">
                <p className="text-gray-100 font-light border-l-2 border-[#019D90] rounded font-inter px-3 leading-snug dark:text-slate-400">
                  Firstly, thank you for being honest. Secondly, no. Please do
                  not use or abuse this service for illegal activities. This
                  service is for personal use only, please use it with respect
                  and a conscience.
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