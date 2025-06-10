type SectionLabelProps = {
  title: string;
};

export default function SectionLabel({ title }: SectionLabelProps) {
  return (
    <div >
      <div className="w-full bg-lime-200 py-1  p-8">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 font-serif">
          {title}
        </h2>
      </div>
    </div>
  );
}
