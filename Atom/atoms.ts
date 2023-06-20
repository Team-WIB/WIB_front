import { atom } from 'recoil';

export const AddFormAtom = atom<boolean>({
    key: 'addForm',
    default: false
})

export const FixFormAtom = atom<boolean>({
    key: 'fixForm',
    default: false
})