import ToggleButton from "./ToggleButton";

export default function Header() {
    return (
            <div className="flex justify-between items-end px-3">
                <div className="">
                <a href={'/'} className="text-3xl font-normal">
                    lazuwrite
                </a>
                </div>
                <div className="">
                <ToggleButton />
                </div>
            </div>
    );
}