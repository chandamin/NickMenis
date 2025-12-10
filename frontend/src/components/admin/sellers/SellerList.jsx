import SellerRow from "./SellerRow";

export default function SellerList({ leads, onView }) {
  return (
    <div className="custom-admin-list">
      {leads.map(l => (
        <SellerRow key={l.id} lead={l} onView={onView} />
      ))}
    </div>
  );
}
