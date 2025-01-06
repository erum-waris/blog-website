import CommentSection from "./CommentSection";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";

const AboutSection = () => (
  <section>
    <div className="mx-auto max-w-7xl text-center py-8 px-8 bg-black/20 rounded-lg grid grid-cols-1 place-items-center ">
      <Heading2 text="About Us" />
      <div>
        <Heading2 text="Introduction" />
        <p className="text-white leading-relaxed text-xl md:text-2xl  ">
          Welcome to our community where we are dedicated to supporting parents
          on their journey to raise happy, healthy, and well-rounded children.
          Our mission is to provide valuable resources, expert advice, and a
          safe space for parents to connect, share, and grow together.
        </p>
      </div>

      <div>
        <Heading2 text="Our Mission" />
        <p className="text-white leading-relaxed text-xl md:text-2xl ">
          At Parenting Blog, our mission is to empower parents by sharing
          insightful blogs, quotes, and resources. We aim to create a community
          where parents can find support, inspiration, and guidance to navigate
          their parenting journey.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Heading2 text="Our Comprehensive Content" />
        <p className="text-white leading-relaxed  text-xl md:text-2xl ">
          Our content is carefully crafted to support parents throughout their
          journey from the moment they discover they are expecting to the day
          their child spreads their wings and becomes an independent adult. We
          understand that parenting is a dynamic and ever-evolving experience,
          and our content reflects that.
        </p>
        <Heading2 text="Pregnancy and Parenting Stages" />
        <ul className="space-y-2 text-white text-xl md:text-2xl text-center ">
          <li>
            <Heading3 text="Pregnancy:" /> Prenatal care, pregnancy wellness,
            and preparing for parenthood.
          </li>
          <li>
            <Heading3 text="Infancy (0-1 year):" />
            Caring for newborns, breastfeeding, and navigating the first year.
          </li>
          <li>
            <Heading3 text="Toddlerhood (1-3 years):" />
            Developmental milestones, discipline, and encouraging independence.
          </li>
          <li>
            <Heading3 text="Preschool age (3-5 years):" />
            Social-emotional learning, education, and preparing for school.
          </li>
          <li>
            <Heading3 text="School age (6-12 years):" />
            Academic support, bullying prevention, and fostering friendships.
          </li>
          <li>
            <Heading3 text="Teenage years (13+ years):" />
            Navigating adolescence, building self-esteem, and preparing for
            young adulthood.
          </li>
        </ul>
        <Heading2 text="Key Topic Areas" />
        <ul className="space-y-4 text-white text-xl md:text-2xl text-center">
          <li>
            <Heading3 text="Child Development:" />
            Understanding developmental milestones, cognitive development, and
            social-emotional growth.
          </li>
          <li>
            <Heading3 text="Parenting Strategies:" />
            Effective discipline techniques, positive reinforcement, and stress
            management.
          </li>
          <li>
            <Heading3 text="Teenage years (13+ years):" />
            <strong>Education and Learning:</strong> Supporting academic
            success, homeschooling, and special needs education.
          </li>
          <li>
            <Heading3 text="Health and Wellness:" />
            Nutrition, fitness, mental health, and self-care for parents and
            children.
          </li>
          <li>
            <Heading3 text="Family Relationships:" />
            Building strong parent-child relationships, co-parenting, and
            navigating family dynamics.
          </li>
          <li>
            <Heading3 text="Personal Growth and Self-Care:" />
            Mindfulness, self-care, and personal development for parents.
          </li>
          <li>
            <Heading3 text="Safety and Emergency Preparedness:" />
            Child safety, emergency planning, and disaster preparedness.
          </li>
          <li>
            <Heading3 text="Technology and Media:" />
            Digital parenting, screen time management, and online safety.
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <Heading2 text=" Our Vision" />

        <p className="text-white leading-relaxed text-xl md:text-2xl">
          We envision a world where parents feel confident and well-equipped to
          raise their children, fostering strong relationships and nurturing
          environments for the next generation. Through our platform, we aim to
          provide valuable insights and create lasting connections among parents
          worldwide.
        </p>
      </div>
      <div className="mt-8">
        <Heading2 text="Stay Connected" />
        <p className="text-white leading-relaxed text-xl md:text-2xl mt-5">
          By covering these diverse topics and parenting stages, we aim to
          provide a comprehensive resource for parents, empowering them to make
          informed decisions and navigate the complexities of modern parenting.
          Subscribe to our blog for regular updates, insights, and tips on
          parenting. Follow us on social media to join the conversation, ask
          questions, and share your experiences. 
        </p>
      </div>
      <Heading3 text="Thank you for being part of our
          community" />
           
    </div>
    <CommentSection />
   
  </section>
);

export default AboutSection ;
