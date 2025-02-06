import "./TripStyle.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover your unique destination place using Google Maps</p>
      <div className="tripcard">
        <TripData
          image="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip in Indonesia"
          text="From the idyllic beaches of Bali to the chaotic melting pot of Jakarta, The Prambanan collection of Hindu temples in Yogyakarta will astound you with their architecture and aura of spirituality. Capital city Jakarta is a cultural and political hub that’s jam-packed with museums, performing arts centers, and traditional food stalls."
        />
        <TripData
          image="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip in Malaysia"
          text="Malaysia has a multicultural heritage, lush rainforests, and beautiful beaches. It has four UNESCO-designated World Heritage Sites. These include the Lenggong Valley, an archaeological heritage site worth mentioning, George Town and Melaka's beautiful cities, Kinabalu Park, and Gunung Mulu National Park."
        />
        <TripData
          image="https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip in France"
          text="France is renowned for its iconic landmarks such as the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, and Palace of Versailles. It is also famous for its exquisite cuisine, fine wines, fashion houses, and picturesque countryside dotted with charming villages and vineyards."
        />
      </div>
    </div>
  );
}
export default Trip;
