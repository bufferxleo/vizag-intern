import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Editor extends Component {
  state = {
    editorHtml: '',
    theme: 'snow'
  };

  handleChange = (html) => {
    this.setState({ editorHtml: html });
  };

  handleThemeChange = (newTheme) => {
    if (newTheme === 'core') newTheme = null;
    this.setState({ theme: newTheme });
  };

  handleAddVideo = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'video/*');
    input.onchange = () => {
      const file = input.files[0];
      if (file) {
        this.handleUploadVideo(file);
      }
    };
    input.click();
  };

  handleUploadVideo = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const videoUrl = e.target.result;
      const videoEmbed = this.generateVideoEmbed(videoUrl, file.type);
      const updatedHtml = this.state.editorHtml + videoEmbed;
      this.setState({ editorHtml: updatedHtml });
    };
    reader.readAsDataURL(file);
  };

  generateVideoEmbed = (url, fileType) => {
    if (fileType.startsWith('video')) {
      // If it's a video file, use <video> tag
      return `<video controls><source src="${url}" type="${fileType}"></video>`;
    } else {
      // Otherwise, assume it's a URL and use <iframe> for embedding
      return `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`;
    }
  };

  render() {
    return (
      <div>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
        />
        <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={(e) => this.handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
            <option value="core">Core</option>
          </select>
        </div>
        <button onClick={this.handleAddVideo}>Add Video</button>
      </div>
    );
  }
}

Editor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }
    ],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false
  }
};

Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video'
];

Editor.propTypes = {
  placeholder: PropTypes.string
};

export default Editor;
