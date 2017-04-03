using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.IE;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisionApiTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var driver = new FirefoxDriver();
            driver.Url = "http://google.de";

            //Task.Run(async () =>
            //{
            //    AsyncMain();
            //}).GetAwaiter().GetResult
        }

        private static async void AsyncMain()
        {
            var x = new ImageAnalysis("654ab204a1594dd8a4620d2cfe0871a7");

            Console.Out.WriteLine("Requesting analysis");
            var analysis = x.AnalyzeImage(new Uri("https://cloud.google.com/blog/big-data/2016/09/images/147318216440078/landmark-detection-7.png"));

            var hashtags = analysis.Result.Tags
                .Where(result => result.Confidence > 0.8)
                .Select(result => "#" + result.Name);

            Console.Out.WriteLine($"Analysis: {String.Join(", ", hashtags)}");

            Console.In.Read();
        }
    }
}
