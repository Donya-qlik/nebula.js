import SvgIcon from './SvgIcon';

const selectionsForward = props => ({
  ...props,
  d:
    'M6,15.5 L6,15.5 C6,15.2238576 6.22385763,15 6.5,15 L9.5,15 C9.77614237,15 10,15.2238576 10,15.5 L10,15.5 C10,15.7761424 9.77614237,16 9.5,16 L6.5,16 C6.22385763,16 6,15.7761424 6,15.5 Z M1,13.5 L1,14.5 C1,14.7761424 1.22385763,15 1.5,15 L2.5,15 C2.77614237,15 3,15.2238576 3,15.5 L3,15.5 C3,15.7761424 2.77614237,16 2.5,16 L1,16 C0.44771525,16 6.76353751e-17,15.5522847 0,15 L0,13.5 C-3.38176876e-17,13.2238576 0.223857625,13 0.5,13 L0.5,13 C0.776142375,13 1,13.2238576 1,13.5 Z M1,6.5 L1,9.5 C1,9.77614237 0.776142375,10 0.5,10 L0.5,10 C0.223857625,10 3.38176876e-17,9.77614237 0,9.5 L0,6.5 C-3.38176876e-17,6.22385763 0.223857625,6 0.5,6 L0.5,6 C0.776142375,6 1,6.22385763 1,6.5 Z M0,2.5 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 L2.5,0 C2.77614237,-5.07265313e-17 3,0.223857625 3,0.5 L3,0.5 C3,0.776142375 2.77614237,1 2.5,1 L1.5,1 C1.22385763,1 1,1.22385763 1,1.5 L1,2.5 C1,2.77614237 0.776142375,3 0.5,3 L0.5,3 C0.223857625,3 3.38176876e-17,2.77614237 0,2.5 Z M6,0.5 L6,0.5 C6,0.223857625 6.22385763,5.07265313e-17 6.5,0 L9.5,0 C9.77614237,-5.07265313e-17 10,0.223857625 10,0.5 L10,0.5 C10,0.776142375 9.77614237,1 9.5,1 L6.5,1 C6.22385763,1 6,0.776142375 6,0.5 Z M15,2.5 L15,1.5 C15,1.22385763 14.7761424,1 14.5,1 L13.5,1 C13.2238576,1 13,0.776142375 13,0.5 L13,0.5 C13,0.223857625 13.2238576,5.07265313e-17 13.5,0 L15,0 C15.5522847,-1.01453063e-16 16,0.44771525 16,1 L16,2.5 C16,2.77614237 15.7761424,3 15.5,3 L15.5,3 C15.2238576,3 15,2.77614237 15,2.5 Z M15,13.5 C15,13.2238576 15.2238576,13 15.5,13 C15.7761424,13 16,13.2238576 16,13.5 L16,15 C16,15.5522847 15.5522847,16 15,16 L13.5,16 C13.2238576,16 13,15.7761424 13,15.5 C13,15.2238576 13.2238576,15 13.5,15 L14.5,15 C14.7761424,15 15,14.7761424 15,14.5 L15,13.5 Z M12,7 C12,5.66666667 12,5 12,5 C14.6666667,7.33333333 16,8.5 16,8.5 C13.3333333,10.8333333 12,12 12,12 L12,10 C7.83948865,9.86624054 6,12.1872632 6,12.1872632 C6,10.1337595 8.50904357,7 12,7 Z',
});

export default props => SvgIcon(selectionsForward(props));
export { selectionsForward };