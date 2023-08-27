import { VerticalFeatureRow } from '../components/feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Designed for students, by students"
    description="LamboTutors leverages peer-to-peer tutoring, forming a dynamic ecosystem that benefits all. Our innovative approach rewards students for sharing expertise, ensuring a win-win situation."
  >
    <VerticalFeatureRow
      title="For Students"
      description="Imagine you're grappling with a challenging module that your university teaches. Instead of struggling in isolation, LamboTutors connects you with skilled peers who excel in the same subject. Get top-notch tutoring, study tips, and insights from those who've mastered the material."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="For Tutors"
      description="But that's not all! When you become a tutor on LamboTutors, you don't just help your fellow students; you also earn incentives for your efforts. It's a platform where learning and teaching come full circle. By sharing your expertise, you empower others while enhancing your own skills and understanding."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="For Community"
      description="LamboTutors is all about breaking down traditional barriers to learning. With our platform, access to top-notch tutoring is no longer reserved for a select few. It's an inclusive community where students support one another, cultivate academic confidence, and thrive in their studies."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
