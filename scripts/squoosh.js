const { exec } = require('child_process');

// room-info
const jobs = [
  {
    fileName: 'comfort-5.jpg',
    prefix: '-2x',
  },
  {
    fileName: 'comfort-5.jpg',
    prefix: '-1x',
    resize: {
      width: 1024,
      height: 576,
    },
  },
  {
    fileName: 'comfort-5.jpg',
    prefix: '-preview-1x',
    resize: {
      width: 240,
      height: 135,
    },
  },
  {
    fileName: 'comfort-5.jpg',
    prefix: '-preview-2x',
    resize: {
      width: 480,
      height: 270,
    },
  },
];

jobs.forEach(({ fileName, prefix, resize }) => {
  const resizeCommand = resize ? `--resize "{"enabled":true,"width":${resize.width},"height":${resize.height}}"` : '';
  const command = `squoosh-cli ${resizeCommand} --mozjpeg "{"quality":90}" --webp "{"quality":90}" ${fileName} -s ${prefix}`;

  exec(command, (error) => {
    if (error) {
      console.error(`error: ${error.message}`);
    }
  });
});
