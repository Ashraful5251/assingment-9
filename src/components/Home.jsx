import React from "react";
import cardData from "../data/data.json";
import Banner from "./banner/Banner";
import Card from "./card/Card";

const Home = () => {
  return (
    <div>
      <Banner />
      <h3 className="text-center font-bold text-2xl my-4">Our Services</h3>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} cardData={card} />
        ))}
      </div>

      {/* Section 1 - Meet the Team */}
      <section className="py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Meet the Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 shadow-md rounded-lg">
              <div className="rounded-full overflow-hidden mx-auto w-24 h-24">
                <img
                  src="https://i.ibb.co/PWTq0bg/d40f2c0590de521e0ee444529d9f00d0.jpg"
                  alt="Team Member 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold mt-2">John Doe</h4>
              <p className="text-gray-400 font-semibold">
                Expertise: Meeting and Event Manager
              </p>
              <p className="text-gray-900">
                Meeting and Event Managers oversee the planning and execution of
                meetings and events for organizations. They handle all aspects,
                from budget management to selecting venues, and they ensure that
                events align with the company's goals and objectives
              </p>
            </div>
            <div className="bg-gray-700 p-4 shadow-md rounded-lg">
              <div className="rounded-full overflow-hidden mx-auto w-24 h-24">
                <img
                  src="https://i.ibb.co/VwtXpWw/cb6ea1d572904b72b8e763a5fc6b011c.jpg"
                  alt="Team Member 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold mt-2">Jane Smith</h4>
              <p className="text-gray-400 font-semibold">
                Expertise: Event Planner
              </p>
              <p className="text-gray-900">
                Event Coordinators are responsible for planning and organizing
                various aspects of events, from selecting venues to coordinating
                logistics and managing on-site operations. They ensure that
                events run smoothly and according to the client's
                specifications.
              </p>
            </div>
            <div className="bg-gray-700 p-4 shadow-md rounded-lg">
              <div className="rounded-full overflow-hidden mx-auto w-24 h-24">
                <img
                  src="https://i.ibb.co/cFbCxT6/1643a9ae28eb316582237a8635911441.jpg"
                  alt="Team Member 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold mt-2">Mary Johnson</h4>
              <p className="text-gray-400 font-semibold">
                Expertise: Event Coordinator
              </p>
              <p className="text-gray-900">
                Event Coordinators are responsible for planning and organizing
                various aspects of events, from selecting venues to coordinating
                logistics and managing on-site operations. They ensure that
                events run smoothly and according to the client's
                specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-700 py-12">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-1200 mb-4">
            Special Features of Our Corporate Events
          </h2>
          <p class="text-lg text-gray-400 mb-8">
            Experience the difference with our corporate event services.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gray-700 rounded-lg shadow-md p-6">
              <i class="fas fa-calendar-check text-3xl text-blue-500 mb-4"></i>
              <h3 class="text-xl font-semibold text-gray-1200 mb-2">
                Expert Planning
              </h3>
              <p class="text-gray-400">
                Our team of experienced event planners will ensure every detail
                is meticulously taken care of, from concept to execution.
              </p>
            </div>

            <div class="bg-gray-700 rounded-lg shadow-md p-6">
              <i class="fas fa-cogs text-3xl text-blue-500 mb-4"></i>
              <h3 class="text-xl font-semibold text-gray-1200 mb-2">
                Customized Solutions
              </h3>
              <p class="text-gray-400">
                We tailor our corporate events to your unique needs, providing
                customized solutions to meet your objectives and goals.
              </p>
            </div>

            <div class="bg-gray-700 rounded-lg shadow-md p-6">
              <i class="fas fa-laptop text-3xl text-blue-500 mb-4"></i>
              <h3 class="text-xl font-semibold text-gray-1200 mb-2">
                Cutting-Edge Technology
              </h3>
              <p class="text-gray-400">
                Stay ahead of the curve with the latest event technology,
                including interactive presentations and virtual options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
