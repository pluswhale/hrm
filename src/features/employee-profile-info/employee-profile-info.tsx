import { StandardInfoBlock } from "entities/profile-items/standard-info-block";
import { HeaderBlock } from "entities/profile-items/header-block";
import { mockUser } from "shared/constants/constants";
import { SkillsBlock } from "entities/profile-items/skills-block";

export const EmployeeProfileInfo = () => {
    //TODO: запрос на пользователя по ID
    return (
        <>
            <HeaderBlock
                name={mockUser?.name}
                profession={mockUser?.role}
                avatar={mockUser?.avatar}
            />
            <StandardInfoBlock title="Контанты" rows={mockUser?.info?.contacts}/>
            <StandardInfoBlock title="О сотруднике" rows={mockUser?.info?.key}/>
            <SkillsBlock skills={mockUser?.skills}/>
        </>
    );
};

