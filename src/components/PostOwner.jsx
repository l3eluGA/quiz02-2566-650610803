export const PostOwner = ({
  name,
  studentId,
  text,
  userImagePath,
  likeNum,
}) => {
  return (
    <div>
      <div className="vstack gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-semibold fs-5 text-white">
            {name} {studentId}
          </span>
        </div>

        <span className="text-white">{text}</span>

        <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span style={{ color: "#B0B3B8" }}>{likeNum}</span>
        </div>
        <hr className="m-0 border" />
      </div>
    </div>
  );
};
