export default function customInputFileInit() {
  const components = document.querySelectorAll('.c-inputfile');

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
  }

  components.forEach((el) => {
    const input = el.querySelector('.c-inputfile__input');
    const label = el.querySelector('.c-inputfile__meta-name');
    const size = el.querySelector('.c-inputfile__meta-size');

    let fileSize = 0;
    let fileName = '';

    input.addEventListener('change', (e) => {
      if (!input.files || input.files.length < 0) return;
      fileSize = input.files[0].size;
      fileName = e.target.value.split('\\').pop();

      label.innerHTML = fileName;
      size.innerHTML = formatBytes(fileSize);
    });
  });
}
