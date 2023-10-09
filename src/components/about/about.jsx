import React from "react";

const about = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <header className="bg-gray-700 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2">Learn more about our organization.</p>
        </div>
      </header>

      <section className="py-10">
        <div className="container mx-auto text-white font-bold">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p>
            We are a team of event professionals who specialize in creating
            exceptional corporate events. With years of experience and a deep
            commitment to our clients' success, we pride ourselves on our
            creativity, attention to detail, and unwavering dedication to
            excellence.
          </p>
        </div>
      </section>

      <section className="bg-gray py-10">
        <div className="container mx-auto text-white font-bold">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p>
            Corporate Events Hub was founded in [Year of Establishment]. Since
            then, we have been on a journey of growth and success. Over the
            years, we have achieved numerous milestones and organized a wide
            range of successful events, from conferences and seminars to product
            launches and award ceremonies.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto text-white font-bold">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p>
            Meet the talented individuals who make up Corporate Events Hub. Our
            team is comprised of event planners, designers, marketers, and
            logistics experts, all working together to turn your event dreams
            into reality. We value collaboration, innovation, and
            professionalism in every member of our team.
          </p>
          {/* Add team members' profiles, photos, and descriptions here */}
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-gray py-10">
        <div className="container mx-auto text-white font-bold">
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission and Values
          </h2>
          <p>
            At Corporate Events Hub, our mission is clear: to deliver
            exceptional corporate events that exceed our clients' expectations.
            We are guided by a set of core values, including creativity,
            integrity, and client satisfaction. These values drive us in
            everything we do, from event planning and execution to customer
            service and beyond. Thank you for considering Corporate Events Hub
            as your trusted partner in creating memorable corporate events. We
            look forward to working with you and bringing your vision to life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default about;
