// import { Delete } from "../icons/others/Delete";
// import { Edit } from "../icons/others/Edit";
import { Plus } from "../icons/others/Plus";
// import { Redirect } from "../icons/others/Redirect"
import { Search } from "../icons/others/Search";
// import { Github } from "../icons/socialIcons/Github"
import { Button } from "./ui/Button";

// generic project component

//@ts-ignore
export const DashboardCard = ({ title, thumbnail, onAdd, onUpdate, onDelete, onSearch }: {
    title: string;
    thumbnail: string;
    onAdd?: () => void;
    onUpdate?: () => void;
    onDelete?: () => void;
    onSearch?: () => void;
}) => {
    return (
        
        <div className="bg-slate-300 p-6 rounded-lg m-10 shadow-lg hover:-translate-y-3 transition-all duration-300 cursor-pointer max-w-xs w-full">
            <img
                src={thumbnail}
                alt="Project Thumbnail"
                className="w-full h-48 rounded-t-lg mb-4"
            />
            <div className="text-center hover:underline font-bold text-custom-2 text-xl pb-4">
                {title}
            </div>
            <div className="flex gap-3 flex-col justify-center items-center mb-4">
                <div>
                    <Button onClick={onAdd} variant="secondary" text="Add" endIcon={<Plus/>}/>
                </div>
                <div>
                    <Button onClick={onSearch} variant="secondary2" text="Search" endIcon={<Search/>}/>
                </div>
                {/* <div>
                    <Button onClick={onUpdate} variant="secondary3" text="Update" endIcon={<Edit/>}/>
                </div>
                <div>
                    <Button onClick={onDelete} variant="other" text="Remove" endIcon={<Delete/>}/>
                </div> */}
            </div>
        </div>
    )
}