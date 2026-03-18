import { BellDot } from "lucide-react";
import Adell from "../assets/images_account/Jane.jpg";

const Account = () => {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <span className="font-bold text-lg">Uang Kas</span>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <BellDot className="text-lg text-black/60" />
        </div>
        <div>
          <img
            src={Adell}
            alt="profile"
            className="size-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
