import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'widgets/navigation';
import { EmployeesList } from 'pages/employee-list/employees-list';
import { EmployeeProfile } from 'pages/employee-profile';
import { CandidatesList } from 'pages/candidates-list';
import { VacanciesList } from 'pages/vacancies-list';
import { VacanciesProfile } from 'pages/vacancies-profile';
import { VacanciesCandidate } from 'pages/vacancies-candidate';
import { RequestsList } from '../requests-list';
import SurveyList from '../survey-list/survey-list';
import { CreateVacancy } from 'pages/create-vacancy';
import { CreateSurvey } from '../create-survey';
import { SurveysProfile } from '../surveys-profile';
import { EditVacancy } from 'pages/edit-vacancy';
import { CreateCandidate } from 'pages/create-cadidate';
import { EditCandidate } from 'pages/edit-cadidate';
import { AppealsList } from 'pages/appeals-list';
import { AppealsProfile } from 'pages/appeals-profile';
import CandidateProfile from 'pages/candidate-profile/candidate-profile';
import { CreateAppeal } from 'pages/create-appeal/';
import { EditAppeal } from 'pages/edit-appeal';
import { EditSurvey } from 'pages/edit-survey';

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<EmployeesList />} />
                <Route path="employees" element={<EmployeesList />} />
                <Route path="employees/:id" element={<EmployeeProfile />} />
                <Route path="candidates" element={<CandidatesList />} />
                <Route path="candidates/:id" element={<CandidateProfile />} />
                <Route path="vacancies" element={<VacanciesList />} />
                <Route path="vacancies/:id" element={<VacanciesProfile />} />
                <Route path="vacancies/:id/:userId" element={<VacanciesCandidate />} />
                <Route path="create/vacancy" element={<CreateVacancy />} />
                <Route path="edit/vacancy/:id" element={<EditVacancy />} />
                <Route path="create/candidate" element={<CreateCandidate />} />
                <Route path="edit/candidate/:id" element={<EditCandidate />} />
                <Route path="appeals" element={<AppealsList />} />
                <Route path="appeals/:id" element={<AppealsProfile />} />
                <Route path="create/appeal" element={<CreateAppeal />} />
                <Route path="edit/appeal/:id" element={<EditAppeal />} />
                <Route path="request" element={<RequestsList />} />
                <Route path="survey" element={<SurveyList />} />
                <Route path="survey/create" element={<CreateSurvey />} />
                <Route path="survey/edit/:id" element={<EditSurvey />} />
                <Route path="survey/:id" element={<SurveysProfile />} />
            </Route>
        </Routes>
    );
};

