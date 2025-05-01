import {
  FaCode,
  FaRocket,
  FaFileAlt,
  FaLock,
  FaUserFriends,
  FaCubes,
  FaRegLightbulb,
} from "react-icons/fa";
import { useState } from "react";

const APIPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample code snippets
  const codeSnippets = {
    curl: `curl -X POST https://api.rapid.ly/v1/links \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "destination": "https://example.com/very-long-url-that-needs-shortening",
    "title": "My Example Link",
    "domain_id": "default"
  }'`,

    javascript: `// Using fetch API
const createLink = async () => {
  try {
    const response = await fetch('https://api.rapid.ly/v1/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({
        destination: 'https://example.com/very-long-url-that-needs-shortening',
        title: 'My Example Link',
        domain_id: 'default'
      })
    });
    
    const data = await response.json();
    console.log('New link created:', data);
  } catch (error) {
    console.error('Error creating link:', error);
  }
}`,

    python: `import requests

api_key = "YOUR_API_KEY"
url = "https://api.rapid.ly/v1/links"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

payload = {
    "destination": "https://example.com/very-long-url-that-needs-shortening",
    "title": "My Example Link",
    "domain_id": "default"
}

response = requests.post(url, json=payload, headers=headers)
data = response.json()

if response.status_code == 201:
    print(f"Link created successfully: {data['shortened_url']}")
else:
    print(f"Error: {data['message']}")`,

    php: `<?php
$api_key = "YOUR_API_KEY";
$url = "https://api.rapid.ly/v1/links";

$payload = array(
    "destination" => "https://example.com/very-long-url-that-needs-shortening",
    "title" => "My Example Link",
    "domain_id" => "default"
);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Content-Type: application/json",
    "Authorization: Bearer " . $api_key
));

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$data = json_decode($response, true);

if ($http_code == 201) {
    echo "Link created successfully: " . $data["shortened_url"];
} else {
    echo "Error: " . $data["message"];
}
?>`,
  };

  const apiMethods = [
    {
      method: "POST",
      endpoint: "/v1/links",
      description: "Create a new shortened link",
      responseCode: "201 Created",
    },
    {
      method: "GET",
      endpoint: "/v1/links",
      description: "Retrieve all links",
      responseCode: "200 OK",
    },
    {
      method: "GET",
      endpoint: "/v1/links/{link_id}",
      description: "Retrieve a specific link",
      responseCode: "200 OK",
    },
    {
      method: "PATCH",
      endpoint: "/v1/links/{link_id}",
      description: "Update a link",
      responseCode: "200 OK",
    },
    {
      method: "DELETE",
      endpoint: "/v1/links/{link_id}",
      description: "Delete a link",
      responseCode: "204 No Content",
    },
    {
      method: "GET",
      endpoint: "/v1/links/{link_id}/stats",
      description: "Get link click statistics",
      responseCode: "200 OK",
    },
    {
      method: "GET",
      endpoint: "/v1/domains",
      description: "List all custom domains",
      responseCode: "200 OK",
    },
    {
      method: "POST",
      endpoint: "/v1/qrcodes",
      description: "Generate a QR code for a link",
      responseCode: "201 Created",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto pt-16 pb-20 px-6 sm:px-10">
        {/* Hero section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Developer Resources
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-800 mb-8 leading-tight">
            <span className="text-gray-800">Powerful </span>
            <span className="text-blue-600 italic">API</span>
            <span className="text-gray-800"> for developers</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Integrate Rapid.ly's link shortening, tracking, and analytics
            capabilities directly into your applications with our robust API.
          </p>
        </div>

        {/* API Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: "overview", label: "Overview", icon: <FaRocket /> },
                {
                  id: "authentication",
                  label: "Authentication",
                  icon: <FaLock />,
                },
                { id: "endpoints", label: "Endpoints", icon: <FaCubes /> },
                { id: "examples", label: "Code Examples", icon: <FaCode /> },
                { id: "docs", label: "Documentation", icon: <FaFileAlt /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-6 font-medium border-b-2 ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === "overview" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  API Overview
                </h2>
                <p className="text-gray-600 mb-6">
                  The Rapid.ly API provides programmatic access to create,
                  manage, and analyze shortened links. Our RESTful API uses
                  standard HTTP methods and returns JSON responses, making it
                  easy to integrate with any language or framework.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">
                      Powerful Link Creation
                    </h3>
                    <p className="text-gray-600">
                      Create branded short links with custom domains, UTM
                      parameters, and expiration dates.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">
                      Comprehensive Analytics
                    </h3>
                    <p className="text-gray-600">
                      Access detailed click data including geographic location,
                      referrer, device, and browser information.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">
                      Bulk Operations
                    </h3>
                    <p className="text-gray-600">
                      Create, update, or analyze multiple links in a single API
                      request for efficiency at scale.
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-lg mb-8">
                  <FaRegLightbulb className="text-blue-600 text-xl mr-4 flex-shrink-0" />
                  <p className="text-gray-700">
                    Our API is available on all plans, with increasing rate
                    limits for higher tier plans. Check the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      pricing page
                    </a>{" "}
                    for details.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Base URL
                </h3>
                <div className="bg-gray-800 text-white p-4 rounded-lg font-mono mb-8">
                  https://api.rapid.ly/v1
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  API Versioning
                </h3>
                <p className="text-gray-600 mb-4">
                  All API requests should include the version (v1) in the URL
                  path. We maintain backward compatibility within major versions
                  and provide migration guides when introducing new major
                  versions.
                </p>
              </div>
            )}

            {activeTab === "authentication" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  Authentication
                </h2>
                <p className="text-gray-600 mb-6">
                  All API requests must be authenticated using API keys. You can
                  generate and manage your API keys from your Rapid.ly
                  dashboard.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    API Keys
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Include your API key in the Authorization header using the
                    Bearer authentication scheme:
                  </p>
                  <div className="bg-gray-800 text-white p-4 rounded-lg font-mono">
                    Authorization: Bearer YOUR_API_KEY
                  </div>
                </div>

                <div className="flex items-center p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg mb-8">
                  <p className="text-gray-700">
                    <span className="font-bold">Security Note:</span> Keep your
                    API keys secure and never expose them in client-side code.
                    If you suspect a key has been compromised, you can revoke it
                    immediately from your dashboard.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Rate Limiting
                </h3>
                <p className="text-gray-600 mb-4">
                  API requests are subject to rate limiting based on your plan:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 py-2 px-4 text-left">
                          Plan
                        </th>
                        <th className="border border-gray-200 py-2 px-4 text-left">
                          Rate Limit
                        </th>
                        <th className="border border-gray-200 py-2 px-4 text-left">
                          Burst Limit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 py-2 px-4">
                          Free
                        </td>
                        <td className="border border-gray-200 py-2 px-4">
                          100 requests/day
                        </td>
                        <td className="border border-gray-200 py-2 px-4">
                          10 requests/minute
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 py-2 px-4">
                          Pro
                        </td>
                        <td className="border border-gray-200 py-2 px-4">
                          1,000 requests/day
                        </td>
                        <td className="border border-gray-200 py-2 px-4">
                          60 requests/minute
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 py-2 px-4">
                          Business
                        </td>
                        <td className="border border-gray-200 py-2 px-4">
                          10,000 requests/day
                        </td>
                        <td className="border border-gray-200 py-2 px-4">
                          300 requests/minute
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 py-2 px-4">
                          Enterprise
                        </td>
                        <td className="border border-gray-200 py-2 px-4">
                          Custom
                        </td>
                        <td className="border border-gray-200 py-2 px-4">
                          Custom
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "endpoints" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  API Endpoints
                </h2>
                <p className="text-gray-600 mb-6">
                  Our API provides the following endpoints for managing links,
                  domains, and analytics:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 py-3 px-4 text-left">
                          Method
                        </th>
                        <th className="border border-gray-200 py-3 px-4 text-left">
                          Endpoint
                        </th>
                        <th className="border border-gray-200 py-3 px-4 text-left">
                          Description
                        </th>
                        <th className="border border-gray-200 py-3 px-4 text-left">
                          Response
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {apiMethods.map((method, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="border border-gray-200 py-3 px-4">
                            <span
                              className={`inline-block py-1 px-2 rounded text-xs font-medium ${
                                method.method === "GET"
                                  ? "bg-green-100 text-green-800"
                                  : method.method === "POST"
                                  ? "bg-blue-100 text-blue-800"
                                  : method.method === "PATCH"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {method.method}
                            </span>
                          </td>
                          <td className="border border-gray-200 py-3 px-4 font-mono text-sm">
                            {method.endpoint}
                          </td>
                          <td className="border border-gray-200 py-3 px-4">
                            {method.description}
                          </td>
                          <td className="border border-gray-200 py-3 px-4 text-sm">
                            {method.responseCode}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    Need More Details?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For complete information on request parameters, response
                    formats, and error handling, refer to our comprehensive API
                    documentation.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 font-medium hover:underline"
                  >
                    <FaFileAlt className="mr-2" />
                    Read the full API docs
                  </a>
                </div>
              </div>
            )}

            {activeTab === "examples" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  Code Examples
                </h2>
                <p className="text-gray-600 mb-6">
                  Get started quickly with these examples showing how to create
                  a shortened link in different programming languages:
                </p>

                <div className="mb-6">
                  <div className="flex border-b border-gray-200">
                    <button
                      className={`py-2 px-4 font-medium ${
                        activeTab === "examples" &&
                        !window.location.hash.slice(1)
                          ? "border-b-2 border-blue-600 text-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => {
                        setActiveTab("examples");
                        window.location.hash = "";
                      }}
                    >
                      cURL
                    </button>
                    {Object.keys(codeSnippets)
                      .slice(1)
                      .map((lang) => (
                        <button
                          key={lang}
                          className={`py-2 px-4 font-medium ${
                            window.location.hash === `#${lang}`
                              ? "border-b-2 border-blue-600 text-blue-600"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                          onClick={() => {
                            setActiveTab("examples");
                            window.location.hash = lang;
                          }}
                        >
                          {lang.charAt(0).toUpperCase() + lang.slice(1)}
                        </button>
                      ))}
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg mt-4 overflow-x-auto">
                    <pre className="text-white text-sm">
                      {window.location.hash
                        ? codeSnippets[window.location.hash.slice(1)] ||
                          codeSnippets.curl
                        : codeSnippets.curl}
                    </pre>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    Response Example
                  </h3>
                  <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-white text-sm">
                      {`{
  "id": "abcd1234",
  "destination": "https://example.com/very-long-url-that-needs-shortening",
  "shortened_url": "https://rpd.ly/exmpl",
  "title": "My Example Link",
  "domain": "rpd.ly",
  "created_at": "2025-04-21T15:32:24Z",
  "expires_at": null,
  "click_count": 0
}`}
                    </pre>
                  </div>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">
                      SDK Libraries
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We provide official SDK libraries for popular languages to
                      make integration even easier:
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">
                          JavaScript/Node.js SDK
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">
                          Python SDK
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">
                          PHP SDK
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">
                          Ruby SDK
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">
                          Java SDK
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">
                      Sample Applications
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Check out these open-source sample applications built with
                      our API:
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">
                          React Link Management Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">
                          Express.js URL Shortener
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">
                          Django Analytics Tool
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">
                          iOS Share Extension
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">
                          Chrome Extension
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "docs" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  Documentation
                </h2>
                <p className="text-gray-600 mb-6">
                  Our comprehensive documentation covers everything you need to
                  know about the Rapid.ly API:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">
                      Getting Started Guide
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn how to create your API key, make your first request,
                      and understand the basic concepts.
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Read the guide →
                    </a>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">
                      API Reference
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Detailed reference for all endpoints, including
                      parameters, response fields, and error codes.
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Explore the reference →
                    </a>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">
                      SDK Documentation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Integration guides for our official SDKs in various
                      programming languages.
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      View SDK docs →
                    </a>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">
                      Webhooks Guide
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn how to set up webhooks to receive real-time
                      notifications about link clicks and events.
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Set up webhooks →
                    </a>
                  </div>
                </div>

                <div className="bg-blue-600 rounded-lg p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">
                    Interactive API Explorer
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Try out API requests directly from your browser with our
                    interactive API explorer. Test endpoints, see responses, and
                    generate code snippets.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Launch API Explorer
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Developer support */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Developer Support
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <FaFileAlt className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                API Status
              </h3>
              <p className="text-gray-600 mb-4">
                Check our system status page for API uptime and incident
                history.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                View status dashboard
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FaUserFriends className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                Developer Community
              </h3>
              <p className="text-gray-600 mb-4">
                Join our community forum to connect with other developers and
                share solutions.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Join the community
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaRegLightbulb className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Support</h3>
              <p className="text-gray-600 mb-4">
                Contact our developer support team for technical assistance with
                the API.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Get support
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Are there any rate limits on the API?",
                answer:
                  "Yes, API rate limits vary by plan. Free accounts have 100 requests per day, Pro accounts have 1,000 requests per day, and Business accounts have 10,000 requests per day. Enterprise customers receive custom limits based on their needs.",
              },
              {
                question: "What formats does the API support?",
                answer:
                  "Our API accepts request data in JSON format and returns responses in JSON format. For file uploads (such as custom QR code images), we support multipart/form-data requests.",
              },
              {
                question:
                  "Can I manage links created through the web interface using the API?",
                answer:
                  "Yes, all links are accessible through the API regardless of how they were created. You can retrieve, update, and analyze links created through the web interface, mobile app, or API.",
              },
              {
                question: "Is there a way to bulk create or update links?",
                answer:
                  "Yes, our API supports bulk operations. You can create or update up to 100 links in a single API request using the /v1/links/bulk endpoint, which is available on Pro plans and above.",
              },
              {
                question: "How do I handle API errors?",
                answer:
                  "Our API uses standard HTTP status codes and returns detailed error messages in the response body. We recommend implementing proper error handling in your applications to catch and respond to these errors appropriately.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-2xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to start building?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Sign up for a free account today and get immediate access to our
            API. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Create Free Account
            </a>
            <a
              href="#"
              className="bg-blue-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Sales for Enterprise
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIPage;
