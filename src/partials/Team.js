import React from 'react';

function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our passionate team</h2>
            {/*  <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consequat.</p>*/}
          </div>

          {/* Team members */}
          <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>

            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-01.jpg')} width="120" height="120" alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Desmend Jetton</h4>
                <div className="text-gray-500 mb-1">CEO, Corporate Outreach & Co-founder</div>
              {/*  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@laraamprecht</a> */}
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-02.jpg')} width="120" height="120" alt="Team member 02" />
                <h4 className="text-xl font-medium mb-1">Nicole Wilson</h4>
                <div className="text-gray-500 mb-1">CDO, Data & Market Research & Co-founder</div>
              {/*  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@marie_moon</a> */}
              </div>
            </div>

            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-03.jpg')} width="120" height="120" alt="Team member 03" />
                <h4 className="text-xl font-medium mb-1">Deja Baker</h4>
                <div className="text-gray-500 mb-1">CTO, Head of Curriculum & Co-founder</div>
              {/*  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@mr_sebastian</a> */}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;
