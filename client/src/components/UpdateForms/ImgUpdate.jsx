const ImgUpdateForm = () => {
    return (
        <div className="space-y-4 max-w-md">
            <label className="block text-sm font-medium">Upload New Profile Picture</label>
            <input type="file" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Upload
            </button>
        </div>
    );
}
export default ImgUpdateForm;