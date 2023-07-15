export default function Page({ params }: { params: { slug: string } }) {
  return <div className="w-full text-black text-[1.2rem] px-10 py-4 md:max-w-[800px] md:mx-auto">
    {params.slug}
  </div>;
}
