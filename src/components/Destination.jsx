import DestinationData from "./DestinationData";
import "./DestinationStyle.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p> Tours give you the oppourtunity to explore</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is a stunning natural wonder! The views from the top
            are breathtaking, showcasing the beauty of Taal Lake. The trek can
            be challenging but rewarding, and the unique landscape is a
            photographer's dream. Just be mindful of safety updates due to its
            activity."
        img1="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt.Daguldul, Batangas"
        text="Have you ever seen a golf course on top of a mountain? Neither have we until we climbed Mt. Daguldol. All that was missing were people hauling clubs or racing golf carts. For those of you who wants to experience a different kind of summit, a relaxed climb and meet really nice people, this is the mountain for you"
        img1="https://images.unsplash.com/photo-1711295933426-df76e882116a?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1671772555442-cc9813ce8c76?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};
export default Destination;
