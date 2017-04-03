using Microsoft.ProjectOxford.Vision;
using Microsoft.ProjectOxford.Vision.Contract;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisionApiTest
{
    public class ImageAnalysis
    {
        public string SubscriptionKey { get; set; }

        public ImageAnalysis(string subscriptionKey)
        {
            SubscriptionKey = subscriptionKey;
        }

        public Task<AnalysisResult> AnalyzeImage(Uri imageFilePath)
        {
            VisionServiceClient VisionServiceClient = new VisionServiceClient(SubscriptionKey);
            
            VisualFeature[] visualFeatures = new VisualFeature[] {
                VisualFeature.Adult,
                VisualFeature.Categories,
                VisualFeature.Color,
                VisualFeature.Description,
                VisualFeature.Faces,
                VisualFeature.ImageType,
                VisualFeature.Tags
            };

            return VisionServiceClient.AnalyzeImageAsync(imageFilePath.AbsoluteUri, visualFeatures);
        }
    }
}
