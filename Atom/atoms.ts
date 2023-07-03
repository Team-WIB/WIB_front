import { atom } from "recoil";

export const AddFormAtom = atom<boolean>({
  key: "addForm",
  default: false,
});

export const AddFormAnswerAtom = atom<string>({
  key: "addFormAnswer",
  default: "",
})

export const FixFormAtom = atom<boolean>({
  key: "fixForm",
  default: false,
});

export const isListFilterFront = atom<boolean>({
  key: "isListFilterFront",
  default: false,
});

export const Question = atom<string>({
  key: "question",
  default: "",
});

export const Answer = atom<string>({
  key: "answer",
  default: "",
});