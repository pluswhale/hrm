import { Route, Routes, useNavigate } from 'react-router-dom';
import { Navigation } from 'widgets/navigation';
import { EmployeesList } from 'pages/hr-manager-pages/employee-list/employees-list';
import { EmployeeProfile } from 'pages/hr-manager-pages/employee-profile';
import { CandidatesList } from 'pages/hr-manager-pages/candidates-list';
import { VacanciesList } from 'pages/hr-manager-pages/vacancies-list';
import { VacanciesProfile } from 'pages/hr-manager-pages/vacancies-profile';
import { VacanciesCandidate } from 'pages/hr-manager-pages/vacancies-candidate';
import { RequestsList } from '../hr-manager-pages/requests-list';
import SurveyList from '../hr-manager-pages/survey-list/survey-list';
import { CreateVacancy } from 'pages/hr-manager-pages/create-vacancy';
import { CreateSurvey } from '../hr-manager-pages/create-survey';
import { SurveysProfile } from '../hr-manager-pages/surveys-profile';
import { EditVacancy } from 'pages/hr-manager-pages/edit-vacancy';
import { CreateCandidate } from 'pages/hr-manager-pages/create-cadidate';
import { EditCandidate } from 'pages/hr-manager-pages/edit-cadidate';
import { AppealsList } from 'pages/hr-manager-pages/appeals-list';
import { AppealsProfile } from 'pages/hr-manager-pages/appeals-profile';
import CandidateProfile from 'pages/hr-manager-pages/candidate-profile/candidate-profile';
import { CreateAppeal } from 'pages/hr-manager-pages/create-appeal/';
import { EditAppeal } from 'pages/hr-manager-pages/edit-appeal';
import { EditSurvey } from 'pages/hr-manager-pages/edit-survey';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../redux/selectors/auth';
import { useEffect } from 'react';
import { RequestsListEmployee } from 'pages/employee-pages/requests-list-employee';
import SurveyListEmployee from 'pages/employee-pages/survey-list-employee/survey-list-employee';
import SurveyByIdEmployee from 'pages/employee-pages/survey-by-id-employee/survey-by-id-employee';

export const Routing = () => {
    const navigate = useNavigate();

    const userRole = useSelector(userDataSelector)?.role;

    useEffect(() => {
        if (userRole === 'Employee') {
            navigate('/request/employee');
        }
    }, [userRole]);

    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                {userRole === 'HRManager' ? (
                    <>
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
                    </>
                ) : null}

                {userRole === 'Employee' ? (
                    <>
                        <Route path="request/employee" element={<RequestsListEmployee />} />
                        <Route path="survey/employee/:sort" element={<SurveyListEmployee />} />
                        <Route path="survey/employee/:sort/:id" element={<SurveyByIdEmployee />} />
                    </>
                ) : null}
            </Route>
        </Routes>
    );
};

