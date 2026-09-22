import PageLayout from "../components/PageLayout";

const ThoughtsPage = () => (
  <PageLayout>
    <section className="py-16 flex flex-col justify-center items-center px-4 bg-transparent min-h-[50vh]">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl font-light text-slate-900 tracking-[-0.06em] text-center">
          THOUGHTS
        </h2>
        <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
      </div>

      <p className="text-lg text-center text-slate-600 max-w-xl">
        Will add thoughts soon.
      </p>
    </section>
  </PageLayout>
);

export default ThoughtsPage;
