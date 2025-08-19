import React, { useState, useEffect } from "react";
import Layout2 from "../Components/Layout/Layout2";
import * as XLSX from "xlsx";
import Link from "next/link";
const CommunityCenter = () => {
  const [excelData, setExcelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSheet, setCurrentSheet] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadExcelFile = async () => {
      try {
        const response = await fetch(
          "/img/pdfs/TotalSASStudentsList(05-11-2024.xlsx"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Excel file");
        }

        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        // Parse all sheets
        const sheets = {};
        workbook.SheetNames.forEach((sheetName) => {
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          sheets[sheetName] = jsonData;
        });

        setExcelData({
          sheetNames: workbook.SheetNames,
          sheets: sheets,
        });
        setLoading(false);
      } catch (err) {
        console.error("Error loading Excel file:", err);
        setError("Failed to load Excel file: " + err.message);
        setLoading(false);
      }
    };

    loadExcelFile();
  }, []);

  // Filter data based on search term
  const getFilteredData = () => {
    if (!excelData || !searchTerm) {
      return excelData?.sheets[excelData.sheetNames[currentSheet]] || [];
    }

    const data = excelData.sheets[excelData.sheetNames[currentSheet]] || [];
    return data.filter((row) =>
      row.some(
        (cell) =>
          cell &&
          cell.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <>
      <Layout2>
        <style jsx>{`
          .hero-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 80px 0;
            position: relative;
            overflow: hidden;
          }
          .hero-section::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>')
              repeat;
            opacity: 0.3;
          }
          .hero-content {
            position: relative;
            z-index: 2;
          }
          .floating-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            animation: fadeInUp 0.6s ease-out;
          }
          .floating-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          }
          .excel-header {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
            border-radius: 20px 20px 0 0;
            padding: 25px;
            position: relative;
          }
          .excel-header::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.3),
              transparent
            );
          }
          .search-box {
            border-radius: 25px;
            border: 2px solid #e3f2fd;
            padding: 12px 20px;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.9);
          }
          .search-box:focus {
            border-color: #4facfe;
            box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
            outline: none;
          }
          .modern-table {
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            border: none;
          }
          .modern-table thead th {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 0.5px;
          }
          .modern-table tbody tr {
            transition: all 0.2s ease;
            border: none;
          }
          .modern-table tbody tr:hover {
            background: linear-gradient(
              135deg,
              rgba(79, 172, 254, 0.05) 0%,
              rgba(0, 242, 254, 0.05) 100%
            );
            transform: scale(1.01);
          }
          .modern-table tbody td {
            padding: 12px 15px;
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            vertical-align: middle;
          }
          .pagination-modern {
            display: flex;
            justify-content: center;
            gap: 5px;
            margin-top: 20px;
          }
          .pagination-modern button {
            border: none;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 25px;
            transition: all 0.3s ease;
            font-weight: 500;
          }
          .pagination-modern button:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
          }
          .pagination-modern button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .pagination-modern button.active {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            transform: scale(1.1);
          }
          .stats-card {
            background: linear-gradient(
              135deg,
              rgba(79, 172, 254, 0.1) 0%,
              rgba(0, 242, 254, 0.1) 100%
            );
            border-radius: 15px;
            padding: 20px;
            border: 1px solid rgba(79, 172, 254, 0.2);
            text-align: center;
          }
          .loading-spinner {
            display: inline-block;
            width: 50px;
            height: 50px;
            border: 4px solid rgba(79, 172, 254, 0.3);
            border-radius: 50%;
            border-top-color: #4facfe;
            animation: spin 1s ease-in-out infinite;
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .btn-gradient {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            color: white;
            padding: 12px 30px;
            border-radius: 25px;
            font-weight: 600;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .btn-gradient:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
            color: white;
          }
          .btn-success-gradient {
            background: linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%);
            border: none;
            color: white;
            padding: 12px 30px;
            border-radius: 25px;
            font-weight: 600;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .btn-success-gradient:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(86, 171, 47, 0.3);
            color: white;
          }
        `}</style>

        <div className="hero-section">
          <div className="container">
            <div className="hero-content text-center">
              <h1
                className="display-4 fw-bold mb-3"
                style={{ textAlign: "center", color: "white" }}
              >
                Community Center
              </h1>
              <p className="lead mb-4" style={{ textAlign: "center" }}>
                Empowering Communities Through Education & Excellence
              </p>
              <div className="d-flex justify-content-center gap-3">
                <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
                  <i className="fas fa-users me-2"></i>Students Management
                </span>
                <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
                  <i className="fas fa-chart-line me-2"></i>Progress Tracking
                </span>
                <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
                  <i className="fas fa-graduation-cap me-2"></i>Academic
                  Excellence
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <div className="floating-card mb-5">
                <div className="excel-header">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h3 className="mb-1">
                        <i className="fas fa-table me-3"></i>
                        SAS Students Database
                      </h3>
                      <p className="mb-0 opacity-75">
                        <i className="fas fa-calendar me-2"></i>
                        Total SAS Students List (05-11-2024)
                      </p>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <a
                        href="/img/pdfs/TotalSASStudentsList(05-11-2024.xlsx"
                        className="btn-success-gradient"
                        download
                      >
                        <i className="fas fa-download"></i>
                        Download Excel
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  {loading ? (
                    <div className="text-center py-5">
                      <div className="loading-spinner mx-auto mb-3"></div>
                      <h5 className="text-muted">Loading Excel Data...</h5>
                      <p className="text-muted">
                        Please wait while we process your file
                      </p>
                    </div>
                  ) : error ? (
                    <div
                      className="alert alert-danger border-0 rounded-3"
                      role="alert"
                    >
                      <i className="fas fa-exclamation-triangle me-2"></i>
                      <strong>Error:</strong> {error}
                    </div>
                  ) : (
                    <div>
                      <div className="row mb-4">
                        <div className="col-md-6">
                          {excelData && excelData.sheetNames.length > 1 && (
                            <div>
                              <label className="form-label fw-bold text-muted mb-2">
                                <i className="fas fa-layer-group me-2"></i>
                                Select Sheet
                              </label>
                              <select
                                className="form-select search-box"
                                value={currentSheet}
                                onChange={(e) => {
                                  setCurrentSheet(parseInt(e.target.value));
                                }}
                              >
                                {excelData.sheetNames.map(
                                  (sheetName, index) => (
                                    <option key={index} value={index}>
                                      {sheetName}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          )}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "1rem",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div className="col-md-6">
                            <label className="form-label fw-bold text-muted mb-2">
                              <i className="fas fa-search me-2"></i>Search
                              Records
                            </label>
                            <input
                              type="text"
                              className="form-control search-box"
                              placeholder="Search students, IDs, or any data..."
                              value={searchTerm}
                              onChange={(e) => {
                                setSearchTerm(e.target.value);
                              }}
                            />
                          </div>

                          <div className="feature_buttons widget_buttons">
                            <Link
                              href="/contact"
                              className="g_btn hbtn_1 to_right1 i_left rad-30"
                            >
                              <i className="fal fa-heart"></i>Adopt A Family
                              <span></span>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {excelData && (
                        <div className="row mb-4">
                          <div className="col-md-4">
                            <div className="stats-card">
                              <h4 className="text-primary mb-1">
                                {getFilteredData().length}
                              </h4>
                              <small className="text-muted">
                                Total Records
                              </small>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="stats-card">
                              <h4 className="text-success mb-1">
                                {excelData.sheetNames.length}
                              </h4>
                              <small className="text-muted">Worksheets</small>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="stats-card">
                              <h4 className="text-info mb-1">
                                {excelData.sheets[
                                  excelData.sheetNames[currentSheet]
                                ]?.length || 0}
                              </h4>
                              <small className="text-muted">
                                Sheet Records
                              </small>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Excel Data Display */}
                      {excelData && (
                        <div>
                          <div
                            className="table-responsive"
                            style={{ maxHeight: "600px", overflowY: "auto" }}
                          >
                            <table className="table modern-table">
                              <thead>
                                <tr>
                                  {getFilteredData()[0]
                                    ?.slice(0, -1)
                                    .map((header, index) => (
                                      <th key={index} scope="col">
                                        {header || `Column ${index + 1}`}
                                      </th>
                                    ))}
                                </tr>
                              </thead>
                              <tbody>
                                {getFilteredData()
                                  .slice(1)
                                  .map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                      {row
                                        .slice(0, -1)
                                        .map((cell, cellIndex) => (
                                          <td key={cellIndex}>{cell || "-"}</td>
                                        ))}
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="mt-4 text-center">
                            <small className="text-muted">
                              <i className="fas fa-info-circle me-2"></i>
                              Showing {getFilteredData().length} records from
                              sheet:{" "}
                              <strong>
                                {excelData.sheetNames[currentSheet]}
                              </strong>
                              {searchTerm && ` (filtered by: "${searchTerm}")`}
                            </small>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Community Center Info */}
              <div className="floating-card">
                <div className="p-4">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h3 className="text-primary mb-3">
                        <i className="fas fa-building me-3"></i>
                        About Our Community Center
                      </h3>
                      <p className="lead text-muted mb-3">
                        Our Community Center serves as a comprehensive hub for
                        educational excellence and social development. The SAS
                        (Student Achievement System) program represents our
                        commitment to tracking and enhancing student progress
                        through data-driven insights.
                      </p>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span>Comprehensive Student Tracking</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span>Academic Progress Monitoring</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span>Community Engagement Programs</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span>Educational Resource Management</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="stats-card">
                        <i className="fas fa-users fa-3x text-primary mb-3"></i>
                        <h4 className="text-primary">Building Futures</h4>
                        <p className="text-muted mb-0">
                          Through Education & Community
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout2>
    </>
  );
};

export default CommunityCenter;
