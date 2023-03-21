import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist();

export const SelectedFilterState = atom({
    key : "SelectedFilterState",
    default : "",
})

export const SelectedTopFiveFilterState = atom({
    key : "SelectedTopFiveFilterState",
    default : "좋아요",
})

export const PreviewImgsState = atom({
    key : "PreviewImgsState",
    default : ["",],
})
