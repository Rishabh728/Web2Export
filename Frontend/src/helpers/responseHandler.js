import toast from "react-hot-toast";

const handleApiResponse = (apiCall, onSuccess, onError) => {
  return async (...args) => {
    try {
      // Execute the API call
      const response = await apiCall(...args);

      // Log the response for debugging
      console.log("API Response:", response);

      // Extract success and message fields from the response
      const success = response?.success ?? response?.data?.success;
      const message = response?.message ?? response?.data?.message;

      // Handle success case
      if (success) {
        toast.success(message || "Operation successful!");
        if (onSuccess) onSuccess(response?.data); // Invoke success callback if provided
      }
      // Handle error case based on "success: false"
      else {
        toast.error(message || "Something went wrong!");
        if (onError) onError(response?.data || response); // Invoke error callback if provided
      }
    } catch (error) {
      console.error("API Error:", error);

      // Extract error message from the error response
      const errorMessage =
        error.response?.data?.message || error.message || "An error occurred";

      // Display error toast
      toast.error(errorMessage);

      // Invoke error callback if provided
      if (onError) onError(error.response?.data || { error: errorMessage });
    }
  };
};

export default handleApiResponse;
