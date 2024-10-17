import TitlePage from "../components/Title/page";
import TitleItem from "../components/Title/items";
import PageLayout from "../Layouts/PageLayout";
import GitHubCalendar from 'react-github-calendar';

const PortfolioPage = () => {
  return(
    <>
      <PageLayout>
        <TitlePage>
          Portfolio
        </TitlePage>
        <TitleItem>
          Github Contributor Calendar
        </TitleItem>
        <div className="flex justify-center mx-12 mb-24">
          <GitHubCalendar username="dmsandhika" />
        </div>
        <div className="bg-base-100 py-12">
          <TitleItem>
            My Project
          </TitleItem>
        </div>
      </PageLayout>
    </>
  );
}

export default PortfolioPage;