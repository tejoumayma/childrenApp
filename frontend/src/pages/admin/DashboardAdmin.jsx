import React, { useState, useEffect } from "react";
import {
  createVideo,
  deleteVideo,
  unsetCurrent,
} from "../../features/videos/videoSlice";
import {
  createTale,
  deleteTale,
  unsetCurrentTale,
} from "../../features/tales/taleSlice";
import { useDispatch, useSelector } from "react-redux";

export default function DashboardAdmin() {
  //videos
  const [video, setVideo] = useState({
    vdName: " ",
    URLvd: " ",
    vdDescription: " ",
  });
  const { vdName, URLvd, vdDescription } = video;
  const { current } = useSelector((state) => state.Videos);
  const dispatch = useDispatch();
  const onChange = (e) =>
    setVideo({ ...video, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      dispatch(createVideo({ vdName, URLvd, vdDescription }));
      setVideo({
        vdName: " ",
        URLvd: " ",
        vdDescription: " ",
      });
    }
  };

  useEffect(() => {
    if (current !== null) {
      setVideo(current);
    } else {
      setVideo({
        vdName: " ",
        URLvd: " ",
        vdDescription: " ",
      });
    }
  }, [current]);
  //Tales
  const [tale, setTale] = useState({
    taleName: "",
    URLtale: "",
    taleDescription: "",
  });
  const { taleName, URLtale, taleDescription } = tale;
  const { currentTale } = useSelector((state) => state.Tales);
  const dispatchTale = useDispatch();
  const onChangeTale = (e) =>
    setTale({ ...tale, [e.target.name]: e.target.value });

  const onSubmitTale = (e) => {
    e.preventDefault();
    if (currentTale === null) {
      dispatchTale(createTale({ taleName, URLtale, taleDescription }));
      setTale({
        taleName: "",
        URLtale: "",
        taleDescription: "",
      });
    }
  };

  useEffect(() => {
    if (currentTale !== null) {
      setTale(currentTale);
    } else {
      setTale({
        taleName: "",
        URLtale: "",
        taleDescription: "",
      });
    }
  }, [currentTale]);

  return (
    <div>
      {/* delete form */}

      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Delete</h3>
                  <form>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          name="vdName"
                          value={vdName}
                          type="text"
                          id="vdName"
                          className="form-control form-control-lg"
                          onChange={onChange}
                        />
                        <label className="form-label" htmlFor="vdName">
                          Name
                        </label>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Delete"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* add tale form */}

      <section onSubmit={onSubmitTale} className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add tales</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="URL"
                            id="URLtale"
                            className="form-control form-control-lg"
                            onChange={onChangeTale}
                            name="URLtale"
                            value={URLtale}
                          />
                          <label className="form-label" htmlFor="URLtale">
                            URL
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="taleDescription"
                            className="form-control form-control-lg"
                            onChange={onChangeTale}
                            name="taleDescription"
                            value={taleDescription}
                          />
                          <label
                            className="form-label"
                            htmlFor="taleDescription"
                          >
                            Summary
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="taleName"
                            onChange={onChangeTale}
                            name="taleName"
                            value={taleName}
                          />
                          <label htmlFor="taleName" className="form-label">
                            Tale Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Add"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* add video form */}

      <section onSubmit={onSubmit} className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add videos</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="URL"
                            id="URLvd"
                            className="form-control form-control-lg"
                            onChange={onChange}
                            name="URLvd"
                            value={URLvd}
                          />
                          <label className="form-label" htmlFor="URLvd">
                            URL
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="vdDescription"
                            className="form-control form-control-lg"
                            onChange={onChange}
                            name="vdDescription"
                            value={vdDescription}
                          />
                          <label className="form-label" htmlFor="vdDescription">
                            description
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            name="vdName"
                            value={vdName}
                            type="text"
                            id="vdName"
                            className="form-control form-control-lg"
                            onChange={onChange}
                          />
                          <label htmlFor="videoName" className="form-label">
                            video Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Add"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* add games */}

      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add games</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="URL"
                            id="URLgame"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="URLgame">
                            URL
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="gameName"
                          />
                          <label htmlFor="gameName" className="form-label">
                            Game Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Add"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
