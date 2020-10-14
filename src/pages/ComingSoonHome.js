import React from 'react';

import ComingSoonHeader from '../partials/ComingSoonHeader';
import PageIllustration from '../partials/PageIllustration';
import TeamImages from '../partials/TeamImages';
import Team from '../partials/Team';
import Footer from '../partials/Footer';
import ComingSoonHtml from '../partials/ComingSoonHtml'


function ComingSoonHome() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <ComingSoonHeader />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <ComingSoonHtml />
        <Team />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default ComingSoonHome;
